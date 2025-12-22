/**
 * Sandbox runtime code that executes inside the iframe
 * Handles component rendering and communication with parent window
 * Phase 6.3: Sandbox Environment
 */

import type { SandboxMessage, PreviewError } from '@cognidocs/types';

/**
 * Generate runtime code that will execute inside the sandbox iframe
 * This code runs in the iframe context, not in the parent window
 */
export function generateRuntimeCode(
  componentCode: string,
  componentName: string,
  props: Record<string, unknown>
): string {
  // Transform component code to ensure it's globally accessible and browser-compatible
  // Transform CommonJS code to run in sandbox

  // 1. Shim require to return global React/ReactDOM
  // We need to handle 'react' and 'react-dom' requires which CommonJS output will produce
  // Also expose React hooks globally so destructured imports work
  let transformedCode =
    `
    const require = (moduleName) => {
      if (moduleName === 'react') return window.React;
      if (moduleName === 'react-dom') return window.ReactDOM;
      return {}; // Shim for other imports
    };

    // Expose React hooks globally for destructured imports
    const { useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer, useLayoutEffect, useImperativeHandle } = window.React;

    const exports = {};
    const module = { exports: exports };
  ` + componentCode;

  // 2. Remove any remaining TypeScript artifacts if they exist (though module: CommonJS usually handles this)
  transformedCode = transformedCode
    .replace(/^interface\s+\w+\s*\{[\s\S]*?\}\s*$/gm, '')
    .replace(/^type\s+\w+\s*=\s*[\s\S]*?;\s*$/gm, '');

  // 3. No need to handle exports via regex anymore as they are assignments to exports.Foo or exports.default
  // The CommonJS output will look like: exports.Button = ... or Object.defineProperty(exports, ...)

  return `
(function() {
  'use strict';

  // Global error handler
  window.addEventListener('error', function(event) {
    sendError({
      message: event.message,
      stack: event.error?.stack,
      line: event.lineno,
      column: event.colno,
    });
    event.preventDefault();
  });

  window.addEventListener('unhandledrejection', function(event) {
    sendError({
      message: 'Unhandled Promise Rejection: ' + event.reason,
      stack: event.reason?.stack,
    });
    event.preventDefault();
  });

  // Communication with parent window
  function sendMessage(message) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(message, '*');
    }
  }

  function sendError(error) {
    sendMessage({
      type: 'PREVIEW_ERROR',
      payload: error,
    });
  }

  function sendReady() {
    sendMessage({
      type: 'PREVIEW_READY',
      payload: null,
    });
  }

  function sendRenderComplete() {
    sendMessage({
      type: 'PREVIEW_RENDER',
      payload: null,
    });
  }

  // Listen for prop updates from parent
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'UPDATE_PROPS') {
      try {
        renderComponent(event.data.payload);
      } catch (error) {
        sendError({
          message: error.message,
          stack: error.stack,
        });
      }
    }
  });

  // Component code execution
  try {
    // Execute the transformed component code
    ${transformedCode}

    // Get React and ReactDOM from global scope (loaded via local vendor scripts)
    const React = window.React;
    const ReactDOM = window.ReactDOM;

    if (!React || !ReactDOM) {
      throw new Error('React libraries not loaded. Check vendor script paths.');
    }

    // Get the component from CommonJS exports
    // 1. Try named export (e.g., exports.Button)
    // 2. Try default export (e.g., exports.default or module.exports.default)
    // 3. Try module.exports if it's a direct assignment
    let Component = exports['${componentName}'] || module.exports['${componentName}'];

    if (!Component) {
      if (exports.default) Component = exports.default;
      else if (module.exports.default) Component = module.exports.default;
      else if (typeof module.exports === 'function' || typeof module.exports === 'object') {
        // If module.exports is the component itself
        Component = module.exports;
      }
    }

    if (!Component) {
      throw new Error('Component "${componentName}" not found. Make sure it is exported.');
    }

    // Render function
    function renderComponent(props) {
      const root = document.getElementById('root');
      if (!root) {
        throw new Error('Root element not found');
      }

      try {
        // Clear previous render
        ReactDOM.unmountComponentAtNode(root);

        // Create element and render
        const element = React.createElement(Component, props);
        ReactDOM.render(element, root);

        sendRenderComplete();
      } catch (error) {
        // Show error in the preview
        root.innerHTML = \`
          <div class="error-container">
            <div class="error-title">Render Error:</div>
            <div>\${error.message}</div>
          </div>
        \`;
        throw error;
      }
    }

    // Initial render with props
    const initialProps = ${JSON.stringify(props)};
    renderComponent(initialProps);
    sendReady();

  } catch (error) {
    sendError({
      message: error.message,
      stack: error.stack,
    });

    // Show error in preview
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = \`
        <div class="error-container">
          <div class="error-title">Component Error:</div>
          <div>\${error.message}</div>
        </div>
      \`;
    }
  }
})();
  `.trim();
}

/**
 * Parse error from sandbox error payload
 */
export function parsePreviewError(payload: unknown): PreviewError {
  if (typeof payload === 'object' && payload !== null) {
    const error = payload as Partial<PreviewError>;
    return {
      message: error.message || 'Unknown error',
      stack: error.stack,
      line: error.line,
      column: error.column,
    };
  }

  return {
    message: String(payload),
  };
}

/**
 * Validate sandbox message structure
 */
export function isSandboxMessage(data: unknown): data is SandboxMessage {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const msg = data as Partial<SandboxMessage>;
  const validTypes = ['UPDATE_PROPS', 'PREVIEW_ERROR', 'PREVIEW_READY', 'PREVIEW_RENDER'];

  return typeof msg.type === 'string' && validTypes.includes(msg.type);
}

/**
 * Create a timeout promise for sandbox execution
 */
export function createExecutionTimeout(timeoutMs: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Preview execution timed out after ${timeoutMs}ms`));
    }, timeoutMs);
  });
}
