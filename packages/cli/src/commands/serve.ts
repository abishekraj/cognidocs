import { resolve, join } from 'path';
import chalk from 'chalk';
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { extname } from 'path';
import { loadConfig } from '../config';
import * as os from 'os';

export interface ServeOptions {
  config?: string;
  port?: number;
  host?: boolean;
}

const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

export async function serveCommand(options: ServeOptions = {}): Promise<void> {
  console.log(chalk.blue('🌍 Starting CogniDocs server...\n'));

  const config = await loadConfig(options.config);
  const outputDir = resolve(process.cwd(), config.output || 'docs');
  const siteDir = join(outputDir, 'site');

  if (!existsSync(siteDir)) {
    console.error(
      chalk.red('\n❌ Site directory not found. Please run `cognidocs build` first.\n')
    );
    process.exit(1);
  }

  console.log(chalk.gray(`   Serving from: ${siteDir}\n`));

  const port = options.port || 4173;
  const host = options.host ? '0.0.0.0' : 'localhost';

  const server = createServer(async (req, res) => {
    try {
      // Remove query string and decode URI
      let filePath = decodeURIComponent(req.url?.split('?')[0] || '/');

      // Default to index.html for root and directory paths
      if (filePath === '/' || filePath.endsWith('/')) {
        filePath = join(filePath, 'index.html');
      }

      // Security: prevent directory traversal
      const fullPath = resolve(siteDir, filePath.slice(1));
      if (!fullPath.startsWith(siteDir)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      // Check if file exists
      if (!existsSync(fullPath)) {
        // Try with .html extension
        const htmlPath = fullPath + '.html';
        if (existsSync(htmlPath)) {
          const content = await readFile(htmlPath);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
          return;
        }

        // Fallback to index.html for SPA routing
        const indexPath = join(siteDir, 'index.html');
        if (existsSync(indexPath)) {
          const content = await readFile(indexPath);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
          return;
        }

        res.writeHead(404);
        res.end('Not Found');
        return;
      }

      // Determine content type
      const ext = extname(fullPath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      // Read and serve file
      const content = await readFile(fullPath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (error) {
      console.error(chalk.red('Error serving file:'), error);
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  });

  server.listen(port, host, () => {
    // Bind to specified host
    console.log(
      chalk.green(`🚀 Server starting on http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`)
    );
    console.log(chalk.cyan(`  ➜  Local:   http://localhost:${port}/`));
    if (host === '0.0.0.0') {
      // Attempt to get a network IP address for convenience
      const networkInterfaces = os.networkInterfaces();
      let networkAddress = '...';
      for (const interfaceName in networkInterfaces) {
        const iface = networkInterfaces[interfaceName];
        if (iface) {
          for (const alias of iface) {
            if (alias.family === 'IPv4' && !alias.internal) {
              networkAddress = alias.address;
              break;
            }
          }
        }
        if (networkAddress !== '...') break;
      }
      console.log(chalk.cyan(`  ➜  Network: http://${networkAddress}:${port}/`));
    }
    console.log(chalk.gray('  Press Ctrl+C to stop\n'));
  });

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.error(
        chalk.red(`\n❌ Port ${port} is already in use. Try a different port with --port\n`)
      );
    } else {
      console.error(chalk.red('Failed to start server:'), err);
    }
    process.exit(1);
  });

  // Keep process alive
  await new Promise(() => {});
}
