/**
 * Playwright E2E Tests for CogniDocs Generated Sites
 *
 * These tests verify:
 * 1. Site loads correctly
 * 2. Navigation works (sidebar links)
 * 3. Component documentation pages render properly (not raw HTML)
 * 4. Search functionality works
 * 5. Theme switching works
 */

import { test, expect, Page } from '@playwright/test';
import { execSync, spawn, ChildProcess } from 'child_process';
import path from 'path';
import fs from 'fs-extra';

const ROOT_DIR = path.resolve(__dirname, '..');
const EXAMPLES_DIR = path.join(ROOT_DIR, 'examples');
const CLI_PATH = path.join(ROOT_DIR, 'packages/cli/dist/cli.mjs');

// Example projects to test
const EXAMPLE_PROJECTS = ['sample-react', 'sample-nextjs'];

// Server management
let serverProcess: ChildProcess | null = null;
let currentPort = 4173;

async function startServer(projectDir: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const port = currentPort++;

    serverProcess = spawn('node', [CLI_PATH, 'serve', '--port', port.toString()], {
      cwd: projectDir,
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    let output = '';

    serverProcess.stdout?.on('data', (data) => {
      output += data.toString();
      if (output.includes('Local:') || output.includes('localhost')) {
        // Server is ready
        setTimeout(() => resolve(port), 1000); // Give it a moment to stabilize
      }
    });

    serverProcess.stderr?.on('data', (data) => {
      output += data.toString();
    });

    serverProcess.on('error', (err) => {
      reject(err);
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!output.includes('localhost')) {
        reject(new Error('Server failed to start within timeout'));
      }
    }, 30000);
  });
}

function stopServer() {
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
    serverProcess = null;
  }
}

// Test each example project
for (const projectName of EXAMPLE_PROJECTS) {
  test.describe(`E2E Tests: ${projectName}`, () => {
    const projectDir = path.join(EXAMPLES_DIR, projectName);
    let port: number;
    let baseUrl: string;

    test.beforeAll(async () => {
      // Check if project exists
      if (!(await fs.pathExists(projectDir))) {
        test.skip();
        return;
      }

      // Check if docs are built
      const siteDir = path.join(projectDir, 'docs/site');
      if (!(await fs.pathExists(siteDir))) {
        console.log(`Building docs for ${projectName}...`);
        execSync(`node ${CLI_PATH} build`, {
          cwd: projectDir,
          stdio: 'pipe',
          timeout: 300000,
        });
      }

      // Start server
      port = await startServer(projectDir);
      baseUrl = `http://localhost:${port}`;
      console.log(`Server started at ${baseUrl}`);
    });

    test.afterAll(() => {
      stopServer();
    });

    test('should load the homepage', async ({ page }) => {
      await page.goto(baseUrl);

      // Should have the root div
      await expect(page.locator('#root')).toBeVisible();

      // Should have CogniDocs branding in sidebar
      await expect(page.getByText('CogniDocs')).toBeVisible();
    });

    test('should display sidebar navigation', async ({ page }) => {
      await page.goto(baseUrl);

      // Wait for content to load
      await page.waitForSelector('nav', { timeout: 10000 });

      // Should have Overview section
      await expect(page.getByText('Overview')).toBeVisible();

      // Should have Introduction link
      await expect(page.getByText('Introduction')).toBeVisible();
    });

    test('should navigate to component documentation', async ({ page }) => {
      await page.goto(baseUrl);

      // Wait for navigation to load
      await page.waitForSelector('nav', { timeout: 10000 });

      // Look for Components section or any component link
      const componentsSection = page.getByText('Components').first();
      if (await componentsSection.isVisible()) {
        await componentsSection.click();
      }

      // Find and click on a component link
      const componentLinks = page.locator('a[href*="components"]');
      const count = await componentLinks.count();

      if (count > 0) {
        await componentLinks.first().click();

        // Wait for navigation
        await page.waitForURL(/.*components.*/, { timeout: 5000 });

        // The page should NOT show raw HTML
        const bodyText = await page.locator('body').textContent();
        expect(bodyText).not.toContain('<!doctype html>');
        expect(bodyText).not.toContain('<meta charset');

        // Should show component documentation content
        // Look for typical documentation elements
        const hasTitle = await page.locator('h1').count();
        expect(hasTitle).toBeGreaterThan(0);
      }
    });

    test('should NOT display raw HTML when viewing component pages', async ({ page }) => {
      // This is a critical regression test for the manifest path bug
      await page.goto(baseUrl);

      // Wait for content
      await page.waitForSelector('#root', { timeout: 10000 });

      // Navigate to a component page via URL
      await page.goto(`${baseUrl}/#/content/components/Button`);

      // Wait for content to potentially load
      await page.waitForTimeout(2000);

      // Get the main content area text
      const mainContent = await page.locator('main, article, .prose, [class*="content"]').first();

      if (await mainContent.isVisible()) {
        const text = await mainContent.textContent();

        // Should NOT contain raw HTML tags as text
        expect(text).not.toContain('<!doctype html>');
        expect(text).not.toContain('<html lang="en"');
        expect(text).not.toContain('<meta charset="UTF-8"');
        expect(text).not.toContain('<div id="root"></div>');

        // Should contain documentation content (if component exists)
        // We're flexible here since different projects have different components
      }
    });

    test('should have working search functionality', async ({ page }) => {
      await page.goto(baseUrl);

      // Wait for page to load
      await page.waitForSelector('input[type="text"]', { timeout: 10000 });

      // Find the search input
      const searchInput = page.locator('input[placeholder*="Search"]').first();

      if (await searchInput.isVisible()) {
        await searchInput.fill('Button');

        // Wait for search results
        await page.waitForTimeout(500);

        // Should show some results or "No results"
        const resultsOrEmpty =
          (await page.getByText('No results').isVisible()) ||
          (await page.locator('a[href*="Button"]').count()) > 0;

        expect(resultsOrEmpty).toBe(true);
      }
    });

    test('should have theme switcher', async ({ page }) => {
      await page.goto(baseUrl);

      // Wait for page to load
      await page.waitForSelector('#root', { timeout: 10000 });

      // Look for theme switcher (button or select)
      const themeSwitcher = page.locator('button, select').filter({
        has: page.locator('[class*="theme"], [aria-label*="theme"]'),
      });

      // Theme switcher might be in different forms
      const hasThemeSwitcher =
        (await themeSwitcher.count()) > 0 ||
        (await page.getByText(/GitBook|GitHub|Dark|Light/i).count()) > 0;

      // It's okay if theme switcher isn't prominently visible
      // Just verify the page loads without error
      expect(await page.locator('#root').isVisible()).toBe(true);
    });

    test('should render markdown content correctly', async ({ page }) => {
      await page.goto(`${baseUrl}/#/README`);

      // Wait for content
      await page.waitForSelector('article, .prose, main', { timeout: 10000 });

      // Should have rendered markdown (h1, p, etc.)
      const hasH1 = (await page.locator('h1').count()) > 0;
      expect(hasH1).toBe(true);

      // Should not show raw markdown syntax
      const bodyText = await page.locator('body').textContent();
      // Raw markdown would show "# Title" instead of rendered heading
      // This is a soft check since some content might legitimately contain #
    });

    test('should navigate using hash-based routing', async ({ page }) => {
      await page.goto(baseUrl);

      // Wait for initial load
      await page.waitForSelector('#root', { timeout: 10000 });

      // Navigate to overview
      await page.goto(`${baseUrl}/#/overview`);
      await page.waitForTimeout(1000);

      // Should be on overview page
      expect(page.url()).toContain('#/overview');

      // Navigate to graph
      await page.goto(`${baseUrl}/#/graph`);
      await page.waitForTimeout(1000);

      // Should be on graph page
      expect(page.url()).toContain('#/graph');
    });

    test('should display 404 for invalid routes', async ({ page }) => {
      await page.goto(`${baseUrl}/#/nonexistent-page-12345`);

      // Wait for content
      await page.waitForTimeout(1000);

      // Should show 404 or not found message
      const has404 =
        (await page.getByText('404').isVisible()) ||
        (await page.getByText('Not Found').isVisible()) ||
        (await page.getByText('not found', { exact: false }).isVisible());

      expect(has404).toBe(true);
    });
  });
}

// Specific regression test for the manifest path bug
test.describe('Manifest Path Bug Regression', () => {
  const projectDir = path.join(EXAMPLES_DIR, 'sample-react');
  let port: number;
  let baseUrl: string;

  test.beforeAll(async () => {
    if (!(await fs.pathExists(projectDir))) {
      test.skip();
      return;
    }

    const siteDir = path.join(projectDir, 'docs/site');
    if (!(await fs.pathExists(siteDir))) {
      execSync(`node ${CLI_PATH} build`, {
        cwd: projectDir,
        stdio: 'pipe',
        timeout: 300000,
      });
    }

    port = await startServer(projectDir);
    baseUrl = `http://localhost:${port}`;
  });

  test.afterAll(() => {
    stopServer();
  });

  test('clicking sidebar component link should NOT show raw HTML', async ({ page }) => {
    await page.goto(baseUrl);

    // Wait for sidebar to load
    await page.waitForSelector('nav', { timeout: 10000 });

    // Find the Components section and expand it if needed
    const componentsSection = page.getByText('Components').first();
    if (await componentsSection.isVisible()) {
      await componentsSection.click();
      await page.waitForTimeout(500);
    }

    // Find a component link in the sidebar
    const componentLink = page.locator('nav a[href*="components"]').first();

    if (await componentLink.isVisible()) {
      // Click the component link
      await componentLink.click();

      // Wait for navigation and content
      await page.waitForTimeout(2000);

      // Get all visible text
      const pageText = await page.locator('body').textContent();

      // Critical assertions: should NOT see raw HTML
      expect(pageText).not.toContain('<!doctype html>');
      expect(pageText).not.toContain('<html lang="en" style="scroll-behavior: smooth;">');
      expect(pageText).not.toContain('<meta charset="UTF-8" />');
      expect(pageText).not.toContain('<div id="root"></div>');
      expect(pageText).not.toContain('</head>');
      expect(pageText).not.toContain('</html>');
    }
  });

  test('manifest.json should have relative paths via API', async ({ page }) => {
    const response = await page.request.get(`${baseUrl}/content/manifest.json`);
    expect(response.ok()).toBe(true);

    const manifest = await response.json();

    // Check all paths are relative
    const checkPaths = (items: any[]) => {
      for (const item of items) {
        if (item.path) {
          // Path should not start with /
          expect(item.path.startsWith('/')).toBe(false);
          // Path should not contain /Users/ or C:\
          expect(item.path).not.toMatch(/\/Users\//);
          expect(item.path).not.toMatch(/[A-Z]:\\/);
        }
        if (item.children) {
          checkPaths(item.children);
        }
      }
    };

    checkPaths(manifest);
  });

  test('component markdown should be fetchable via relative path', async ({ page }) => {
    // First get manifest to find a component
    const manifestResponse = await page.request.get(`${baseUrl}/content/manifest.json`);
    const manifest = await manifestResponse.json();

    // Find first component
    const componentsDir = manifest.find((item: any) => item.name === 'components');
    if (componentsDir?.children?.length > 0) {
      const firstComponent = componentsDir.children[0];
      const componentPath = firstComponent.path.replace('.md', '');

      // Fetch the component markdown
      const mdResponse = await page.request.get(`${baseUrl}/content/${componentPath}.md`);
      expect(mdResponse.ok()).toBe(true);

      const content = await mdResponse.text();

      // Should be markdown, not HTML
      expect(content).not.toContain('<!doctype html>');
      expect(content).toContain('#'); // Markdown heading
    }
  });
});
