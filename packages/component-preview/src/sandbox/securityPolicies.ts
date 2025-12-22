/**
 * Security policies for the sandbox iframe
 * Phase 6.3: Sandbox Environment
 */

/**
 * Content Security Policy headers for the sandbox iframe
 * Restricts script execution to inline scripts only (for preview code)
 */
export const CSP_POLICY = [
  "default-src 'none'",
  "script-src 'unsafe-inline' 'unsafe-eval' https://unpkg.com", // Allow inline scripts and CDN for React
  "style-src 'unsafe-inline'", // Allow inline styles for component styling
  "img-src data: https:", // Allow data URLs and HTTPS images
  "font-src data: https:", // Allow fonts
  "connect-src 'none'", // No external connections
].join('; ');

/**
 * Sandbox attributes for the iframe element
 * Restricts iframe capabilities to minimum required for preview
 */
export const SANDBOX_ATTRIBUTES = [
  'allow-scripts', // Required for executing component code
  'allow-same-origin', // Required for React DOM rendering
].join(' ');

/**
 * Maximum execution time for preview code (milliseconds)
 */
export const EXECUTION_TIMEOUT = 5000; // 5 seconds

/**
 * Generate sandbox iframe HTML with security policies
 */
export function generateSandboxHTML(code: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="${CSP_POLICY}">
  <title>Component Preview</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 16px;
      background: #ffffff;
    }
    #root {
      width: 100%;
      height: 100%;
    }
    .error-container {
      padding: 16px;
      background: #fee;
      border: 1px solid #fcc;
      border-radius: 4px;
      color: #c00;
      font-family: monospace;
      font-size: 13px;
    }
    .error-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script>
    // Sandbox runtime code
    ${code}
  </script>
</body>
</html>`;
}

/**
 * Validate that message is from a trusted source
 */
export function validateMessageOrigin(origin: string, allowedOrigins: string[]): boolean {
  // In development, allow localhost
  if (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1')) {
    return true;
  }

  return allowedOrigins.some(allowed => origin === allowed || origin.endsWith(allowed));
}

/**
 * Sanitize error message to prevent XSS
 */
export function sanitizeErrorMessage(message: string): string {
  return message
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
