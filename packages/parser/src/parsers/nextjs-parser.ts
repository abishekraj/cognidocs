/**
 * Next.js Parser
 * Phase 4: Next.js & Framework Support
 */

import * as ts from 'typescript';
import { readFileSync } from 'fs';
import { sep } from 'path';
import { ReactParser } from './react-parser';
import type { ComponentMetadata } from '../types';

import { TypeScriptParser } from './typescript-parser';

export class NextJsParser {
  private reactParser: ReactParser;
  private tsParser: TypeScriptParser;

  constructor() {
    this.reactParser = new ReactParser();
    this.tsParser = new TypeScriptParser();
  }

  /**
   * Parse a Next.js file (page, layout, or api route)
   */
  async parseNextJsFile(filePath: string): Promise<ComponentMetadata[]> {
    // 1. Determine if it's a Next.js special file
    const { isPage, isLayout, isApiRoute, routerType, routePath } =
      this.analyzeNextJsPath(filePath);

    if (!isPage && !isLayout && !isApiRoute) {
      // Treat as standard React component if not a special Next.js file
      // But we still return it as NextJsPageMetadata with flags false
      const reactComponents = await this.reactParser.parseComponent(filePath);
      return reactComponents.map((comp) => ({
        ...comp,
        isPage: false,
        isLayout: false,
        isApiRoute: false,
        routePath: '',
        routerType: 'app', // Default or unknown
        framework: 'nextjs',
      }));
    }

    // 2. Parse based on type
    if (isApiRoute) {
      return this.extractApiRoute(filePath, routePath, routerType);
    }

    // 3. For Pages/Layouts, use React parser but add metadata
    const components = await this.reactParser.parseComponent(filePath);

    // Filter components to find the default export (usually the page/layout)
    // or just mark all found components in this file with the page metadata
    return components.map((comp) => ({
      ...comp,
      isPage,
      isLayout,
      isApiRoute: false,
      routePath,
      routerType,
      framework: 'nextjs',
    }));
  }

  private analyzeNextJsPath(filePath: string): {
    isPage: boolean;
    isLayout: boolean;
    isApiRoute: boolean;
    routerType: 'app' | 'page';
    routePath: string;
  } {
    // Normalize path separators
    const normalizedPath = filePath.split(sep).join('/');

    let isPage = false;
    let isLayout = false;
    let isApiRoute = false;
    let routerType: 'app' | 'page' = 'app';
    let routePath = '';

    // Check for App Router: app/**/page.tsx, app/**/layout.tsx, app/**/route.ts
    if (normalizedPath.includes('/app/')) {
      routerType = 'app';
      const pathAfterApp = normalizedPath.split('/app/')[1];

      if (
        pathAfterApp.endsWith('page.tsx') ||
        pathAfterApp.endsWith('page.js') ||
        pathAfterApp.endsWith('page.jsx')
      ) {
        isPage = true;
        // Derive route path from directory structure
        const dir = pathAfterApp.substring(0, pathAfterApp.lastIndexOf('/'));
        routePath = '/' + dir;
        if (routePath === '/page.tsx') routePath = '/'; // Root page
      } else if (
        pathAfterApp.endsWith('layout.tsx') ||
        pathAfterApp.endsWith('layout.js') ||
        pathAfterApp.endsWith('layout.jsx')
      ) {
        isLayout = true;
      } else if (pathAfterApp.endsWith('route.ts') || pathAfterApp.endsWith('route.js')) {
        isApiRoute = true;
        const dir = pathAfterApp.substring(0, pathAfterApp.lastIndexOf('/'));
        routePath = '/api/' + dir; // App router API routes usually imply API context if not strictly enforce
        // Actually, in App router, route.ts IS an API route.
        // The path is relative to app/.
        routePath = '/' + dir;
      }
    }
    // Check for Page Router: pages/**/*.tsx
    else if (normalizedPath.includes('/pages/')) {
      routerType = 'page';
      const pathAfterPages = normalizedPath.split('/pages/')[1];

      if (pathAfterPages.startsWith('api/')) {
        isApiRoute = true;
        // Use uniform route path calculation relative to pages directory
        routePath = '/' + pathAfterPages.replace(/\.(ts|js|tsx|jsx)$/, '');
        // Handle index routes in API
        if (routePath.endsWith('/index')) routePath = routePath.substring(0, routePath.length - 6);
      } else {
        // Standard page
        isPage = true; // In pages dir, almost everything exported is a page component conceptually, or at least the default export is.
        if (pathAfterPages.includes('_app') || pathAfterPages.includes('_document')) {
          isPage = false; // System files
        } else {
          routePath = '/' + pathAfterPages.replace(/\.(ts|js|tsx|jsx)$/, '');
          if (routePath.endsWith('/index'))
            routePath = routePath.substring(0, routePath.length - 6);
          if (routePath === '') routePath = '/';
        }
      }
    }

    return { isPage, isLayout, isApiRoute, routerType, routePath };
  }

  private async extractApiRoute(
    filePath: string,
    routePath: string,
    routerType: 'app' | 'page'
  ): Promise<ComponentMetadata[]> {
    const fileContent = readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);

    const apiFunctions: ComponentMetadata[] = [];

    // Helper to find exported functions (GET, POST, etc. for App Router; handler for Page Router)
    const visit = (node: ts.Node) => {
      // App Router: look for export async function GET/POST/etc.
      if (routerType === 'app') {
        if (ts.isFunctionDeclaration(node) && node.name) {
          const name = node.name.getText();
          const isExported = node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
          if (
            isExported &&
            ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].includes(name)
          ) {
            const jsDoc = this.tsParser.extractJSDoc(node);
            apiFunctions.push({
              name,
              type: 'function',
              props: [],
              description: jsDoc?.description || `API Handler for ${name} method`,
              jsdoc: jsDoc,
              filePath,
              line: sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1,
              framework: 'nextjs',
              isExported: true,
              isPage: false,
              isLayout: false,
              isApiRoute: true,
              routePath,
              routerType,
            });
          }
        }
      }
      // Page Router: look for default export handler
      else if (routerType === 'page') {
        const isDefaultExport = (n: ts.Node) => {
          if (!ts.canHaveModifiers(n)) return false;
          const modifiers = ts.getModifiers(n);
          return (
            modifiers?.some((m) => m.kind === ts.SyntaxKind.DefaultKeyword) &&
            modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
          );
        };

        // Handle: export default function handler() {}
        if (ts.isFunctionDeclaration(node) && isDefaultExport(node)) {
          const jsDoc = this.tsParser.extractJSDoc(node);
          apiFunctions.push({
            name: node.name?.getText() || 'default',
            type: 'function',
            props: [],
            description: jsDoc?.description || 'API Route Handler',
            jsdoc: jsDoc,
            filePath,
            line: sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1,
            framework: 'nextjs',
            isExported: true,
            isPage: false,
            isLayout: false,
            isApiRoute: true,
            routePath,
            routerType,
          });
        }
        // Handle: export default handler; or export default (req, res) => {}
        else if (ts.isExportAssignment(node)) {
          const jsDoc = this.tsParser.extractJSDoc(node); // Also extract for export assignment if comments exist there
          apiFunctions.push({
            name: 'default',
            type: 'function',
            props: [],
            description: jsDoc?.description || 'API Route Handler',
            jsdoc: jsDoc,
            filePath,
            line: sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1,
            framework: 'nextjs',
            isExported: true,
            isPage: false,
            isLayout: false,
            isApiRoute: true,
            routePath,
            routerType,
          });
        }
      }
    };

    ts.forEachChild(sourceFile, visit);
    return apiFunctions;
  }
}
