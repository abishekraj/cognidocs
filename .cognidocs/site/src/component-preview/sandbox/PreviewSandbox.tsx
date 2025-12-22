/**
 * PreviewSandbox - Secure iframe-based component preview sandbox
 * Phase 6.3: Sandbox Environment
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import type { SandboxMessage, PreviewError } from '@cognidocs/types';
import {
  generateSandboxHTML,
  SANDBOX_ATTRIBUTES,
  EXECUTION_TIMEOUT,
  validateMessageOrigin,
} from './securityPolicies';
import {
  generateRuntimeCode,
  parsePreviewError,
  isSandboxMessage,
} from './sandboxRuntime';

export interface PreviewSandboxProps {
  /** Component source code to execute */
  componentCode: string;
  /** Name of the component to render */
  componentName: string;
  /** Props to pass to the component */
  props: Record<string, unknown>;
  /** Callback when sandbox is ready */
  onReady?: () => void;
  /** Callback when render completes */
  onRender?: () => void;
  /** Callback when an error occurs */
  onError?: (error: PreviewError) => void;
  /** Height of the sandbox iframe */
  height?: string;
  /** Allowed origins for postMessage communication */
  allowedOrigins?: string[];
}

/**
 * PreviewSandbox component
 * Renders component code in an isolated, secure iframe environment
 */
export const PreviewSandbox: React.FC<PreviewSandboxProps> = ({
  componentCode,
  componentName,
  props,
  onReady,
  onRender,
  onError,
  height = '400px',
  allowedOrigins = [],
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Handle messages from the sandbox iframe
   */
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      // Validate message origin for security
      if (!validateMessageOrigin(event.origin, allowedOrigins)) {
        console.warn('Rejected message from untrusted origin:', event.origin);
        return;
      }

      // Validate message structure
      if (!isSandboxMessage(event.data)) {
        return;
      }

      const message = event.data as SandboxMessage;

      // Clear timeout on any message (sandbox is responsive)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      switch (message.type) {
        case 'PREVIEW_READY':
          setIsReady(true);
          setHasError(false);
          onReady?.();
          break;

        case 'PREVIEW_RENDER':
          onRender?.();
          break;

        case 'PREVIEW_ERROR': {
          const error = parsePreviewError(message.payload);
          setHasError(true);
          onError?.(error);
          break;
        }
      }
    },
    [allowedOrigins, onReady, onRender, onError]
  );

  /**
   * Send props update to the sandbox
   */
  const updateProps = useCallback((newProps: Record<string, unknown>) => {
    if (!iframeRef.current?.contentWindow) {
      return;
    }

    const message: SandboxMessage = {
      type: 'UPDATE_PROPS',
      payload: newProps,
    };

    iframeRef.current.contentWindow.postMessage(message, '*');
  }, []);

  /**
   * Initialize sandbox iframe
   */
  useEffect(() => {
    // Set up message listener
    window.addEventListener('message', handleMessage);

    // Set up execution timeout
    timeoutRef.current = setTimeout(() => {
      const error: PreviewError = {
        message: `Component failed to render within ${EXECUTION_TIMEOUT}ms`,
      };
      setHasError(true);
      onError?.(error);
    }, EXECUTION_TIMEOUT);

    return () => {
      window.removeEventListener('message', handleMessage);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleMessage, onError]);

  /**
   * Update props when they change
   */
  useEffect(() => {
    console.log('[PreviewSandbox] Props changed:', props, 'isReady:', isReady, 'hasError:', hasError);
    if (isReady && !hasError) {
      console.log('[PreviewSandbox] Sending UPDATE_PROPS message');
      updateProps(props);
    }
  }, [props, isReady, hasError, updateProps]);

  /**
   * Generate and memoize blob URL for iframe src
   * Only regenerate when component code or name changes (not when props change)
   */
  const [blobUrl, setBlobUrl] = useState<string>('');

  useEffect(() => {
    // Generate runtime code with initial props
    const runtimeCode = generateRuntimeCode(componentCode, componentName, props);
    const html = generateSandboxHTML(runtimeCode);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    setBlobUrl(url);

    // Cleanup: revoke old blob URL
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [componentCode, componentName]); // Only recreate when code/name changes, NOT props

  return (
    <div
      style={{
        width: '100%',
        height,
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#fff',
      }}
    >
      {!isReady && !hasError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9fafb',
            color: '#6b7280',
            fontSize: '14px',
            fontFamily: 'sans-serif',
          }}
        >
          Loading preview...
        </div>
      )}

      {blobUrl && (
        <iframe
          ref={iframeRef}
          src={blobUrl}
          sandbox={SANDBOX_ATTRIBUTES}
          title="Component Preview Sandbox"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: isReady || hasError ? 'block' : 'none',
          }}
        />
      )}
    </div>
  );
};
