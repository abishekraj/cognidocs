import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Box, FileCode, Hash, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { JSDocExample } from '../components/JSDocExample';
import { JSDocLinks } from '../components/JSDocLinks';

interface JSDocExample {
  code: string;
  description?: string;
}

interface JSDocLink {
  text: string;
  url?: string;
  target?: string;
}

interface JSDocMetadata {
  description?: string;
  examples?: JSDocExample[];
  see?: JSDocLink[];
  links?: JSDocLink[];
  params?: Record<string, string>;
  returns?: string;
  deprecated?: string;
  since?: string;
  author?: string[];
}

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
  jsdoc?: JSDocMetadata;
  // Next.js-specific metadata
  isPage?: boolean;
  isLayout?: boolean;
  isApiRoute?: boolean;
  routePath?: string;
  routerType?: 'app' | 'page';
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

      {/* Next.js Metadata (if applicable) */}
      {component.framework === 'nextjs' &&
        (component.isPage || component.isLayout || component.isApiRoute) && (
          <Card className="p-6 border-primary/30 bg-primary/5">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Box className="h-5 w-5 text-primary" />
              Next.js Metadata
            </h2>
            <div className="space-y-2">
              {component.isPage && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">Type:</span>
                  <Badge variant="default">Page Component</Badge>
                </div>
              )}
              {component.isLayout && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">Type:</span>
                  <Badge variant="default">Layout Component</Badge>
                </div>
              )}
              {component.isApiRoute && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">Type:</span>
                  <Badge variant="default">API Route</Badge>
                </div>
              )}
              {component.routePath && (
                <div className="flex items-start gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">Route:</span>
                  <code className="text-sm bg-background px-2 py-1 rounded border border-border">
                    {component.routePath}
                  </code>
                </div>
              )}
              {component.routerType && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">Router:</span>
                  <Badge variant="secondary">
                    {component.routerType === 'app' ? 'App Router' : 'Pages Router'}
                  </Badge>
                </div>
              )}
            </div>
          </Card>
        )}

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

      {/* Deprecated Warning */}
      {component.jsdoc?.deprecated && (
        <Card className="p-6 border-destructive/50 bg-destructive/10">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-destructive mb-2">Deprecated</h3>
              <p className="text-sm text-muted-foreground">{component.jsdoc.deprecated}</p>
            </div>
          </div>
        </Card>
      )}

      {/* JSDoc Examples */}
      {component.jsdoc?.examples && component.jsdoc.examples.length > 0 && (
        <JSDocExample examples={component.jsdoc.examples} />
      )}

      {/* JSDoc Links and See Also */}
      {((component.jsdoc?.see && component.jsdoc.see.length > 0) ||
        (component.jsdoc?.links && component.jsdoc.links.length > 0)) && (
        <JSDocLinks see={component.jsdoc.see} links={component.jsdoc.links} />
      )}

      {/* Additional JSDoc Metadata */}
      {(component.jsdoc?.returns || component.jsdoc?.since || component.jsdoc?.author) && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Additional Information</h3>
          <div className="space-y-3">
            {component.jsdoc.returns && (
              <div>
                <span className="text-sm font-semibold text-muted-foreground">Returns:</span>
                <p className="text-sm text-foreground mt-1">{component.jsdoc.returns}</p>
              </div>
            )}
            {component.jsdoc.since && (
              <div>
                <span className="text-sm font-semibold text-muted-foreground">Since:</span>
                <Badge variant="outline" className="ml-2">
                  {component.jsdoc.since}
                </Badge>
              </div>
            )}
            {component.jsdoc.author && component.jsdoc.author.length > 0 && (
              <div>
                <span className="text-sm font-semibold text-muted-foreground">Author(s):</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {component.jsdoc.author.map((author, index) => (
                    <Badge key={index} variant="secondary">
                      {author}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
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
