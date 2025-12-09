/**
 * Formats a date string to a readable format
 *
 * @param date - The date to format
 * @param locale - The locale to use for formatting
 * @returns Formatted date string
 *
 * @example
 * ```ts
 * formatDate(new Date(), 'en-US'); // "12/9/2025"
 * ```
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale);
}

/**
 * Capitalizes the first letter of a string
 *
 * @param str - The string to capitalize
 * @returns Capitalized string
 *
 * @example
 * ```ts
 * capitalize('hello'); // "Hello"
 * ```
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
