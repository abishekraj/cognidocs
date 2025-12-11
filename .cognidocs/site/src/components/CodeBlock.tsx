import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
  inline?: boolean;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
}

export function CodeBlock({
  children,
  className = '',
  language,
  inline = false,
  showLineNumbers = false,
  showCopyButton = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Convert children to string safely
  const codeString = String(children || '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Extract language from className (e.g., "language-typescript" => "typescript")
  const lang = language || className?.replace(/language-/, '') || '';

  if (inline) {
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground border border-border">
        {codeString}
      </code>
    );
  }

  // Only show copy button and language badge for actual code blocks (multi-line code)
  const isMultiLineCode = codeString.includes('\n') || codeString.length > 80;

  const lines = codeString.split('\n').filter((line: string, index: number, arr: string[]) => {
    // Remove empty last line
    if (index === arr.length - 1 && line.trim() === '') return false;
    return true;
  });

  return (
    <div className="relative group my-4">
      {/* Language badge and copy button - only for multi-line code blocks */}
      {isMultiLineCode && showCopyButton && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border border-border rounded-t-lg">
          {lang && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {lang}
            </span>
          )}
          {!lang && <span></span>}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 text-xs rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code content */}
      <pre className={`bg-muted border border-border p-4 overflow-x-auto ${isMultiLineCode && showCopyButton ? 'rounded-b-lg border-t-0' : 'rounded-lg'}`}>
        <code className={`${className} block text-sm font-mono`}>
          {showLineNumbers ? (
            <table className="w-full border-collapse">
              <tbody>
                {lines.map((line: string, index: number) => (
                  <tr key={index}>
                    <td className="pr-4 text-right text-muted-foreground select-none w-8">
                      {index + 1}
                    </td>
                    <td className="text-foreground">{line}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            codeString
          )}
        </code>
      </pre>
    </div>
  );
}
