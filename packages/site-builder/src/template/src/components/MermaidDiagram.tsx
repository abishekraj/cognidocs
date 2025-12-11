import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '../ThemeContext';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, className = '' }) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { theme } = useTheme();

  useEffect(() => {
    const renderDiagram = async () => {
      if (!chart) return;

      try {
        // Helper to convert HSL values to proper color format
        const getColorValue = (cssVar: string, fallback: string): string => {
          const value = getComputedStyle(document.documentElement)
            .getPropertyValue(cssVar)
            .trim();

          if (!value) return fallback;

          // If it's already a hex color, return it
          if (value.startsWith('#')) return value;

          // If it's HSL format like "265 89% 78%" or "221.2 83.2% 53.3%", convert to hsl() format
          if (/^[\d.]+\s+[\d.]+%\s+[\d.]+%$/.test(value)) {
            const [h, s, l] = value.split(/\s+/);
            return `hsl(${h}, ${s}, ${l})`;
          }

          return fallback;
        };

        // Initialize mermaid with theme-aware configuration
        mermaid.initialize({
          startOnLoad: false,
          theme: theme.mode === 'dark' ? 'dark' : 'default',
          themeVariables: {
            primaryColor: getColorValue('--primary', '#3b82f6'),
            primaryTextColor: getColorValue('--primary-foreground', '#ffffff'),
            primaryBorderColor: getColorValue('--border', '#e5e7eb'),
            lineColor: getColorValue('--muted-foreground', '#6b7280'),
            secondaryColor: getColorValue('--secondary', '#f3f4f6'),
            tertiaryColor: getColorValue('--accent', '#fef3c7'),
          },
          fontFamily: getComputedStyle(document.documentElement)
            .getPropertyValue('font-family')
            .trim() || 'system-ui, -apple-system, sans-serif',
          securityLevel: 'strict',
          logLevel: 'error',
        });

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;

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
      className={`mermaid-diagram my-6 flex items-center justify-center overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
