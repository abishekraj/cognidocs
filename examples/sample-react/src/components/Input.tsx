import React, { useState, useCallback } from 'react';

/**
 * A controlled input component with validation and error handling.
 *
 * This component provides a styled text input with built-in validation,
 * error messages, and various input types support.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChange={setEmail}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With validation error
 * <Input
 *   label="Password"
 *   type="password"
 *   value={password}
 *   onChange={setPassword}
 *   error="Password must be at least 8 characters"
 *   required
 * />
 * ```
 *
 * @since 1.0.0
 * @deprecated Use TextField component instead for better accessibility
 */
export function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  maxLength,
}: {
  /** Label text displayed above the input */
  label: string;

  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

  /** Current input value */
  value: string;

  /** Callback fired when input value changes */
  onChange: (value: string) => void;

  /** Placeholder text shown when input is empty */
  placeholder?: string;

  /** Error message to display below the input */
  error?: string;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether the input is required */
  required?: boolean;

  /** Maximum number of characters allowed */
  maxLength?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="input-wrapper">
      <label className="input-label">
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className={`input ${error ? 'input-error' : ''} ${isFocused ? 'input-focused' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? 'input-error' : undefined}
      />
      {error && (
        <span id="input-error" className="error-message" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
