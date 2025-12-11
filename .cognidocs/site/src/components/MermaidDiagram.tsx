import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '../ThemeContext';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { theme } = useTheme();

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current || !chart) return;

      try {
        // Initialize mermaid with theme-aware configuration
        mermaid.initialize({
          startOnLoad: false,
          theme: theme.includes('dark') ||
                 theme === 'dracula' ||
                 theme === 'monokai' ||
                 theme === 'one-dark' ||
                 theme === 'nord-dark' ||
                 theme === 'github-dark' ||
                 theme === 'gitbook-dark' ||
                 theme === 'solarized-dark'
            ? 'dark'
            : 'default',
          themeVariables: {
            primaryColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--primary')
              .trim() || '#3b82f6',
            primaryTextColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--primary-foreground')
              .trim() || '#ffffff',
            primaryBorderColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--border')
              .trim() || '#e5e7eb',
            lineColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--muted-foreground')
              .trim() || '#6b7280',
            secondaryColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--secondary')
              .trim() || '#f3f4f6',
            tertiaryColor: getComputedStyle(document.documentElement)
              .getPropertyValue('--accent')
              .trim() || '#fef3c7',
          },
          fontFamily: getComputedStyle(document.documentElement)
            .getPropertyValue('font-family')
            .trim() || 'system-ui, -apple-system, sans-serif',
          securityLevel: 'strict',
          logLevel: 'error',
        });

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
        setError('');
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(err instanceof Error ? err.message : 'Failed to render diagram');
        setSvg('');
      }
    };

    renderDiagram();
  }, [chart, theme]);

  if (error) {
    return (
      <div className={`border border-destructive/50 bg-destructive/10 rounded-lg p-4 my-4 ${className}`}>
        <div className="flex items-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <div className="font-semibold text-destructive">Mermaid Diagram Error</div>
            <div className="text-sm text-muted-foreground mt-1">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`flex items-center justify-center p-8 my-4 border border-border rounded-lg bg-muted/30 ${className}`}>
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-sm">Rendering diagram...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram my-6 flex items-center justify-center overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
