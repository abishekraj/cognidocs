import { Component, type ErrorInfo, type ReactNode } from 'react';
import type { PreviewError } from '@cognidocs/types';

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: PreviewError) => void;
  fallback?: (error: PreviewError) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: PreviewError | null;
}

/**
 * Error boundary component for catching and displaying preview errors
 * Provides detailed error information including stack traces
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: {
        message: error.message,
        stack: error.stack,
      },
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const previewError: PreviewError = {
      message: error.message,
      stack: error.stack,
    };

    console.error('Preview Error:', error, errorInfo);

    if (this.props.onError) {
      this.props.onError(previewError);
    }
  }

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error);
      }

      return (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '4px',
            color: '#c00',
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 600 }}>
            Preview Error
          </h3>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            {this.state.error.message}
          </p>
          {this.state.error.stack && (
            <details style={{ fontSize: '12px', marginTop: '10px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 500 }}>
                Stack Trace
              </summary>
              <pre
                style={{
                  marginTop: '10px',
                  padding: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  overflow: 'auto',
                  fontSize: '11px',
                }}
              >
                {this.state.error.stack}
              </pre>
            </details>
          )}
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              backgroundColor: '#c00',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Reset Preview
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
