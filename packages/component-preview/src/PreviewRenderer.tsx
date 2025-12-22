import React, { useState, useCallback } from 'react';
import type { PreviewMetadata, PreviewState, PreviewError } from '@cognidocs/types';
import { ErrorBoundary } from './ErrorBoundary';
import { PreviewSandbox } from './sandbox/PreviewSandbox';

export interface PreviewRendererProps {
  /** Component metadata for preview */
  metadata: PreviewMetadata;
  /** Initial prop values */
  initialProps?: Record<string, unknown>;
  /** Callback when props change */
  onPropsChange?: (props: Record<string, unknown>) => void;
  /** Callback when error occurs */
  onError?: (error: PreviewError) => void;
  /** Custom width for preview container */
  width?: string | number;
  /** Custom height for preview container */
  height?: string | number;
}

/**
 * PreviewRenderer - Main component for rendering live component previews
 *
 * Features:
 * - Live component rendering with error boundaries
 * - Real-time prop updates
 * - Secure sandboxed execution (to be implemented in Phase 6.3)
 *
 * @example
 * ```tsx
 * <PreviewRenderer
 *   metadata={{
 *     componentName: 'Button',
 *     filePath: '/src/Button.tsx',
 *     props: [{ name: 'variant', type: 'string', required: false }],
 *     dependencies: [],
 *     framework: 'react'
 *   }}
 *   initialProps={{ variant: 'primary' }}
 * />
 * ```
 */
export const PreviewRenderer: React.FC<PreviewRendererProps> = ({
  metadata,
  initialProps = {},
  // onPropsChange, // TODO: Will be used in Phase 6.2 with props editor
  onError,
  width = '100%',
  height = '400px',
}) => {
  const [state, setState] = useState<PreviewState>({
    props: initialProps,
    error: null,
    loading: false,
  });

  const handleError = useCallback(
    (error: PreviewError) => {
      setState((prev) => ({ ...prev, error: error as Error, loading: false }));
      if (onError) {
        onError(error);
      }
    },
    [onError]
  );

  // TODO: Add updateProps handler in Phase 6.2 when props editor is implemented
  // This will handle prop updates from the editor UI
  // const updateProps = useCallback(
  //   (newProps: Record<string, unknown>) => {
  //     setState((prev) => ({ ...prev, props: newProps }));
  //     if (onPropsChange) {
  //       onPropsChange(newProps);
  //     }
  //   },
  //   [onPropsChange]
  // );

  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Preview Header */}
      <div
        style={{
          padding: '12px 16px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>
            {metadata.componentName}
          </span>
          <span
            style={{
              fontSize: '12px',
              padding: '2px 8px',
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              borderRadius: '4px',
            }}
          >
            {metadata.framework}
          </span>
        </div>
        {state.loading && (
          <span style={{ fontSize: '12px', color: '#6b7280' }}>Loading...</span>
        )}
      </div>

      {/* Preview Content */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
        }}
      >
        <ErrorBoundary onError={handleError}>
          {metadata.source ? (
            <PreviewSandbox
              componentCode={metadata.source}
              componentName={metadata.componentName}
              props={state.props}
              onError={handleError}
            />
          ) : (
            <div
              style={{
                padding: '40px',
                textAlign: 'center',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>
                  Component source not available
                </p>
                <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
                  The source code for this component could not be extracted
                </p>
              </div>
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default PreviewRenderer;
