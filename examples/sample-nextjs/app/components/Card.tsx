'use client';

import { ReactNode } from 'react';

/**
 * Card component for displaying content in a contained box
 *
 * A versatile card component with support for headers, footers,
 * and multiple visual variants. Commonly used for displaying
 * structured content, statistics, or interactive elements.
 *
 * @example Basic usage
 * ```tsx
 * <Card>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 *
 * @example With header and footer
 * ```tsx
 * <Card
 *   header={<h3>Card Title</h3>}
 *   footer={<button>Action</button>}
 *   variant="outlined"
 * >
 *   <p>Main content</p>
 * </Card>
 * ```
 */

export interface CardProps {
  /** Main content of the card */
  children: ReactNode;
  /** Optional header content */
  header?: ReactNode;
  /** Optional footer content */
  footer?: ReactNode;
  /** Visual variant of the card */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Additional CSS classes */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: () => void;
}

/**
 * Card component for displaying grouped content
 */
export function Card({
  children,
  header,
  footer,
  variant = 'default',
  className = '',
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden transition-all';

  const variantStyles = {
    default: 'bg-white',
    outlined: 'bg-white border-2 border-gray-200',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
  };

  const interactiveStyles = onClick
    ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
    : '';

  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`;

  return (
    <div className={cardStyles} onClick={onClick}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 font-semibold">
          {header}
        </div>
      )}

      <div className="px-6 py-4">{children}</div>

      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
}
