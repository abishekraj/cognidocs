/**
 * formats a date to a string string
 * @param date - The date to format
 * @returns The formatted date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * A utility class for math operations
 */
export class MathUtils {
  /**
   * Adds two numbers
   * @param a - First number
   * @param b - Second number
   */
  static add(a: number, b: number): number {
    return a + b;
  }
}
