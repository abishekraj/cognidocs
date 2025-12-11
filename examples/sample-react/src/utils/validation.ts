/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a password meets minimum security requirements
 * @param password - The password to validate
 * @returns True if password is at least 8 characters long
 */
export function validatePassword(password: string): boolean {
  return password.length >= 8;
}

/**
 * Validates a username
 * @param username - The username to validate
 * @returns True if username is valid (3-20 characters)
 */
export function validateUsername(username: string): boolean {
  return username.length >= 3 && username.length <= 20;
}

/**
 * Validates a phone number in E.164 format
 * @param phone - The phone number to validate
 * @returns True if the phone number matches E.164 format
 */
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
}

/**
 * Sanitizes user input by trimming whitespace and removing dangerous characters
 * @param input - The input string to sanitize
 * @returns The sanitized string with < and > characters removed
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Validates a URL format
 * @param url - The URL to validate
 * @returns True if URL is valid
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Represents the result of a validation operation
 */
export interface ValidationResult {
  /** Indicates whether the validation passed */
  isValid: boolean;
  /** Array of error messages if validation failed */
  errors: string[];
}

/**
 * Form data structure for user registration/login
 */
export interface FormData {
  /** User's email address */
  email: string;
  /** User's password */
  password: string;
  /** User's chosen username */
  username: string;
}

/**
 * A function that validates a string value
 * @param value - The string value to validate
 * @returns True if validation passes, false otherwise
 */
export type ValidationRule = (value: string) => boolean;
