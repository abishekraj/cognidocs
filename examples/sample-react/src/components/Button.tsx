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

  /**
   * A deprecated property for testing purposes
   * @deprecated Use `variant` instead
   */
  oldVariant?: string;
}

/**
 * Button component for user interactions
 *
 * A flexible button component that supports multiple visual variants and states.
 * Perfect for forms, actions, and interactive UI elements.
 *
 * @param props - Button properties
 * @param props.variant - Visual style variant (primary, secondary, or danger)
 * @param props.disabled - Whether the button is disabled
 * @param props.onClick - Click event handler
 * @param props.children - Button content (text, icons, or other React elements)
 *
 * @returns A styled button element
 *
 * @example
 * Basic usage with primary variant
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('Saved!')}>
 *   Save Changes
 * </Button>
 * ```
 *
 * @example
 * Danger button for destructive actions
 * ```tsx
 * <Button variant="danger" onClick={handleDelete}>
 *   Delete Account
 * </Button>
 * ```
 *
 * @example
 * Disabled button state
 * ```tsx
 * <Button variant="secondary" disabled>
 *   Processing...
 * </Button>
 * ```
 *
 * @example
 * Usage with deprecated prop (should show warning)
 * ```tsx
 * <Button oldVariant="legacy" onClick={() => {}}>
 *   Legacy Button
 * </Button>
 * ```
 *
 * @see {@link https://react.dev/reference/react-dom/components/button} React Button Documentation
 * @see ButtonProps - Props interface definition
 *
 * @tutorial getting-started
 * @tutorial button-customization
 *
 * @since 1.0.0
 * @author CogniDocs Team
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button className={`btn btn-${variant}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
