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

  // Component code
  try {
    ${componentCode}

    // Get React and ReactDOM from global scope (loaded via CDN)
    const React = window.React;
    const ReactDOM = window.ReactDOM;

    if (!React || !ReactDOM) {
      throw new Error('React libraries not loaded');
    }

    // Get the component from global scope
    const Component = window['${componentName}'];

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
