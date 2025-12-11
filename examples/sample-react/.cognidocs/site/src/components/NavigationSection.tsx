import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

interface NavigationSectionProps {
  title: string;
  icon?: LucideIcon;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function NavigationSection({
  title,
  icon: Icon,
  count,
  defaultOpen = true,
  children,
  className,
}: NavigationSectionProps) {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <div className={cn('mb-2', className)}>
        <CollapsibleTrigger className="group px-3 py-2 hover:bg-accent/50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1" aria-label={`${title} section`}>
          <div className="flex items-center gap-2 flex-1">
            {Icon && (
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
              {title}
            </span>
            {count !== undefined && (
              <Badge variant="secondary" className="ml-auto mr-2 h-5 px-1.5">
                {count}
              </Badge>
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-1 ml-1 pl-2 border-l border-border/40">
            {children}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
