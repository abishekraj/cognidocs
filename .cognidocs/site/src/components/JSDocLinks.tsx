import React from 'react';
import { ExternalLink, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface JSDocLink {
  text: string;
  url?: string;
  target?: string;
}

interface JSDocLinksProps {
  see?: JSDocLink[];
  links?: JSDocLink[];
  className?: string;
}

export const JSDocLinks: React.FC<JSDocLinksProps> = ({ see, links, className = '' }) => {
  const hasSee = see && see.length > 0;
  const hasLinks = links && links.length > 0;

  if (!hasSee && !hasLinks) return null;

  return (
    <Card className={`p-6 ${className}`}>
      {hasSee && (
        <div className="mb-4 last:mb-0">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            See Also
          </h3>
          <div className="space-y-2">
            {see.map((link, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-3 rounded-lg border border-border hover:bg-accent/5 transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <div>
                      <code className="text-sm font-medium text-foreground">{link.target}</code>
                      {link.text !== link.target && (
                        <p className="text-sm text-muted-foreground mt-1">{link.text}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasLinks && (
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-primary" />
            Related Links
          </h3>
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <Badge
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>{link.text}</span>
                </Badge>
              </a>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
