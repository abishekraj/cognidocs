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
}

export function NavigationItem({
  label,
  href,
  icon: Icon,
  isActive = false,
  className,
  onClick,
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
        isActive
          ? 'bg-accent text-accent-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            'h-3.5 w-3.5 transition-colors',
            isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
          )}
        />
      )}
      <span className="truncate flex-1">{label}</span>
    </a>
  );
}
