import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavigationItemProps {
  label: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  sourcePath?: string;
}

export function NavigationItem({
  label,
  href,
  icon: Icon,
  isActive = false,
  className,
  onClick,
  sourcePath,
}: NavigationItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all group',
        'hover:bg-accent/50 hover:text-accent-foreground',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset',
        isActive
          ? 'bg-accent text-accent-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
      title={sourcePath || undefined}
    >
      {Icon && (
        <Icon
          className={cn(
            'h-3.5 w-3.5 flex-shrink-0 transition-colors',
            isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
          )}
        />
      )}
      <span className="truncate flex-1">{label}</span>
    </a>
  );
}
