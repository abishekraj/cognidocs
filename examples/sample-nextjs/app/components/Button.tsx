'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

/**
 * Button component with multiple variants and sizes
 *
 * A flexible button component supporting different visual styles,
 * sizes, and states. Includes loading state and icon support.
 *
 * @example Primary button
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('Clicked')}>
 *   Click Me
 * </Button>
 * ```
 *
 * @example Loading state
 * ```tsx
 * <Button variant="primary" isLoading>
 *   Saving...
 * </Button>
 * ```
 *
 * @example With icon
 * ```tsx
 * <Button variant="secondary" icon={<IconSave />}>
 *   Save Changes
 * </Button>
 * ```
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: ReactNode;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Whether button is in loading state */
  isLoading?: boolean;
  /** Optional icon to display before text */
  icon?: ReactNode;
  /** Whether button should take full width */
  fullWidth?: boolean;
}

/**
 * Reusable button component for user interactions
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  icon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100',
    danger:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 disabled:bg-transparent disabled:text-gray-400',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button
      className={buttonStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        icon && <span className="inline-flex">{icon}</span>
      )}
      {children}
    </button>
  );
}
