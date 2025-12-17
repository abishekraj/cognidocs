import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';
import { Card } from './ui/card';

interface JSDocExample {
  code: string;
  description?: string;
}

interface JSDocExampleProps {
  examples: JSDocExample[];
  className?: string;
}

export const JSDocExample: React.FC<JSDocExampleProps> = ({ examples, className = '' }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  if (!examples || examples.length === 0) return null;

  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <Code className="h-5 w-5 text-primary" />
        Examples
      </h3>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="space-y-2">
            {example.description && (
              <p className="text-sm text-muted-foreground">{example.description}</p>
            )}
            <div className="relative group">
              <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm border border-border">
                <code className="text-foreground">{example.code}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(example.code, index)}
                className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                title="Copy code"
              >
                {copiedIndex === index ? (
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
