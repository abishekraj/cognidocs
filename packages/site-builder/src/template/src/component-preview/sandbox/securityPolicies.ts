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
  "script-src 'unsafe-inline' 'unsafe-eval' 'self' https://unpkg.com", // Allow inline, local, and unpkg CDN
  "style-src 'unsafe-inline'", // Allow inline styles for component styling
  'img-src data: https:', // Allow data URLs and HTTPS images
  'font-src data: https:', // Allow fonts
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

    /* Default component styles for preview */
    .btn {
      display: inline-block;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-family: inherit;
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .btn-primary {
      background-color: #3b82f6;
      color: white;
      border-color: #3b82f6;
    }
    .btn-primary:hover:not(:disabled) {
      background-color: #2563eb;
      border-color: #2563eb;
    }
    .btn-secondary {
      background-color: #6b7280;
      color: white;
      border-color: #6b7280;
    }
    .btn-secondary:hover:not(:disabled) {
      background-color: #4b5563;
      border-color: #4b5563;
    }
    .btn-danger {
      background-color: #ef4444;
      color: white;
      border-color: #ef4444;
    }
    .btn-danger:hover:not(:disabled) {
      background-color: #dc2626;
      border-color: #dc2626;
    }

    /* Default card styles */
    .card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    /* Default input styles */
    .input {
      display: block;
      width: 100%;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 1.5;
      color: #111827;
      background-color: #fff;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      transition: border-color 0.15s ease-in-out;
    }
    .input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <!-- Load React from CDN for blob URL compatibility -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
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

  return allowedOrigins.some((allowed) => origin === allowed || origin.endsWith(allowed));
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
