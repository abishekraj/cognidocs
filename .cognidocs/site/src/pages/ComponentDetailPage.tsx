import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Box, FileCode, Hash, Link as LinkIcon } from 'lucide-react';

interface ComponentData {
  name: string;
  type: 'function' | 'class';
  description?: string;
  props: Array<{
    name: string;
    type: string;
    required?: boolean;
    description?: string;
  }>;
  hooks?: string[];
  filePath: string;
  line: number;
  framework: string;
  isExported: boolean;
}

interface ComponentDetailPageProps {
  id: string;
}

export function ComponentDetailPage({ id }: ComponentDetailPageProps) {
  const [component, setComponent] = useState<ComponentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load component data from data.json
    fetch('/content/data.json')
      .then((res) => res.json())
      .then((data) => {
        // Find the component in results
        for (const result of data.results) {
          const comp = result.components?.find((c: any) => c.name === id);
          if (comp) {
            setComponent(comp);
            setLoading(false);
            return;
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load component data', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading component...</div>
      </div>
    );
  }

  if (!component) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-destructive">Component not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Box className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">{component.name}</h1>
          <Badge variant="secondary">{component.framework}</Badge>
          <Badge variant="outline">{component.type}</Badge>
        </div>
        {component.description && (
          <p className="text-lg text-muted-foreground mt-2">{component.description}</p>
        )}
      </div>

      <Separator />

      {/* Source Information */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <FileCode className="h-5 w-5" />
          Source
        </h2>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">File:</span>
            <code className="text-sm bg-muted px-2 py-1 rounded flex-1 break-all">
              {component.filePath}
            </code>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">Line:</span>
            <Badge variant="outline">{component.line}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[80px]">Exported:</span>
            <Badge variant={component.isExported ? 'default' : 'secondary'}>
              {component.isExported ? 'Yes' : 'No'}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Props */}
      {component.props && component.props.length > 0 && (
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Props
          </h2>
          <div className="space-y-4">
            {component.props.map((prop) => (
              <div
                key={prop.name}
                className="border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-semibold text-primary">{prop.name}</code>
                    {prop.required && (
                      <Badge variant="destructive" className="text-xs">
                        Required
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-muted-foreground">Type:</span>
                  <code className="ml-2 text-sm bg-muted px-2 py-0.5 rounded">{prop.type}</code>
                </div>
                {prop.description && (
                  <p className="text-sm text-muted-foreground mt-2">{prop.description}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Hooks Used */}
      {component.hooks && component.hooks.length > 0 && (
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            Hooks
          </h2>
          <div className="flex flex-wrap gap-2">
            {component.hooks.map((hook) => (
              <Badge key={hook} variant="secondary">
                {hook}
              </Badge>
            ))}
          </div>
        </Card>
      )}

      {/* Usage Example */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Usage Example</h2>
        <div className="bg-muted rounded-lg p-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { ${component.name} } from '${component.filePath.replace(/.+\/src/, '.')}';

<${component.name}${component.props.length > 0 ? ' ...' : ''} />`}</code>
          </pre>
        </div>
      </Card>
    </div>
  );
}
