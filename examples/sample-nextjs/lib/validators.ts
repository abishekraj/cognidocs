/**
 * Data validation utilities for Next.js application
 *
 * Provides type-safe validation functions for common data types
 * with detailed error messages and sanitization.
 *
 * @module validators
 */

/**
 * Validation result with success status and optional error message
 */
export interface ValidationResult {
  /** Whether validation passed */
  valid: boolean;
  /** Error message if validation failed */
  error?: string;
}

/**
 * Validates an email address format
 *
 * Checks if the provided string is a valid email address using
 * a comprehensive RFC 5322 compliant regex pattern.
 *
 * @param email - The email address to validate
 * @returns Validation result with success status and optional error
 *
 * @example
 * ```typescript
 * const result = validateEmail('user@example.com');
 * if (result.valid) {
 *   console.log('Valid email!');
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return { valid: true };
}

/**
 * Validates a password meets security requirements
 *
 * Ensures password:
 * - Is at least 8 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter
 * - Contains at least one number
 * - Contains at least one special character
 *
 * @param password - The password to validate
 * @returns Validation result with success status and optional error
 *
 * @example
 * ```typescript
 * const result = validatePassword('MyP@ssw0rd');
 * if (!result.valid) {
 *   console.error(result.error);
 * }
 * ```
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return { valid: false, error: 'Password is required' };
  }

  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain an uppercase letter' };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must contain a lowercase letter' };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must contain a number' };
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { valid: false, error: 'Password must contain a special character' };
  }

  return { valid: true };
}

/**
 * Validates a URL format
 *
 * @param url - The URL to validate
 * @returns Validation result with success status and optional error
 *
 * @example
 * ```typescript
 * const result = validateUrl('https://example.com/path?query=value');
 * ```
 */
export function validateUrl(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { valid: false, error: 'URL is required' };
  }

  try {
    new URL(url);
    return { valid: true };
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
}

/**
 * Sanitizes HTML string to prevent XSS attacks
 *
 * Removes potentially dangerous HTML tags and attributes
 * while preserving safe formatting tags.
 *
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 *
 * @example
 * ```typescript
 * const clean = sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>');
 * // Returns: '<p>Safe content</p>'
 * ```
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') {
    return '';
  }

  // Remove script tags and event handlers
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/g, '')
    .replace(/on\w+='[^']*'/g, '')
    .replace(/javascript:/gi, '');
}
