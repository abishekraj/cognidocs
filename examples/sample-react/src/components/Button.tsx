import React from 'react';

/**
 * A customizable button component
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
  /**
   * The button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger';

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Button click handler
   */
  onClick?: () => void;

  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component for user interactions
 *
 * @param props - Button properties
 * @returns A styled button element
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
