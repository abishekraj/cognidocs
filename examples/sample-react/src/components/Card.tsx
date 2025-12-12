import React, { useState, useEffect } from 'react';

/**
 * Props for the Card component
 *
 * @since 1.0.0
 */
export interface CardProps {
  /**
   * The title displayed at the top of the card
   * @example "My Card Title"
   */
  title: string;

  /**
   * Optional subtitle displayed below the title
   * @default undefined
   */
  subtitle?: string;

  /**
   * Card content (can be text, elements, or other components)
   */
  children: React.ReactNode;

  /**
   * Visual style variant of the card
   * @default 'default'
   */
  variant?: 'default' | 'elevated' | 'outlined';

  /**
   * Whether the card is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Callback fired when the card is clicked
   * @param event - The click event
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Custom CSS class name
   */
  className?: string;
}

/**
 * A flexible card component for displaying content with a title and optional actions.
 *
 * The Card component provides a container with consistent styling and optional
 * interactive features. It supports different visual variants and loading states.
 *
 * @component
 * @example
 * ```tsx
 * <Card title="Example Card" variant="elevated">
 *   <p>This is the card content</p>
 * </Card>
 * ```
 *
 * @example
 * ```tsx
 * // With subtitle and click handler
 * <Card
 *   title="Interactive Card"
 *   subtitle="Click me!"
 *   onClick={(e) => console.log('Card clicked', e)}
 * >
 *   <div>Card content here</div>
 * </Card>
 * ```
 *
 * @since 1.0.0
 * @see {@link CardProps} for prop definitions
 */
export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  loading = false,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (loading) {
      console.log('Card is in loading state');
    }
  }, [loading]);

  return (
    <div
      className={`card card-${variant} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-body">{loading ? <div className="loading-spinner" /> : children}</div>
      {isHovered && <div className="card-hover-effect" />}
    </div>
  );
};
