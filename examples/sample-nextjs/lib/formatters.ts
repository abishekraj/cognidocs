/**
 * Formatting utilities for displaying data
 *
 * Provides consistent formatting functions for dates, numbers,
 * currency, and other common display needs.
 *
 * @module formatters
 */

/**
 * Formats a date into a human-readable string
 *
 * @param date - The date to format
 * @param format - The desired format style
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * formatDate(new Date(), 'short'); // "12/25/2024"
 * formatDate(new Date(), 'long'); // "December 25, 2024"
 * formatDate(new Date(), 'relative'); // "2 hours ago"
 * ```
 */
export function formatDate(
  date: Date | string,
  format: 'short' | 'long' | 'relative' = 'short'
): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (format === 'relative') {
    return formatRelativeTime(d);
  }

  const options: Intl.DateTimeFormatOptions =
    format === 'short'
      ? { year: 'numeric', month: 'numeric', day: 'numeric' }
      : { year: 'numeric', month: 'long', day: 'numeric' };

  return d.toLocaleDateString('en-US', options);
}

/**
 * Formats a date as relative time (e.g., "2 hours ago")
 *
 * @param date - The date to format
 * @returns Relative time string
 *
 * @example
 * ```typescript
 * formatRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
 * ```
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }

  return 'just now';
}

/**
 * Formats a number with thousand separators
 *
 * @param num - The number to format
 * @param decimals - Number of decimal places
 * @returns Formatted number string
 *
 * @example
 * ```typescript
 * formatNumber(1234567); // "1,234,567"
 * formatNumber(1234.567, 2); // "1,234.57"
 * ```
 */
export function formatNumber(num: number, decimals: number = 0): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Formats a number as currency
 *
 * @param amount - The amount to format
 * @param currency - The currency code (ISO 4217)
 * @returns Formatted currency string
 *
 * @example
 * ```typescript
 * formatCurrency(1234.56); // "$1,234.56"
 * formatCurrency(1234.56, 'EUR'); // "€1,234.56"
 * ```
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Formats bytes into a human-readable file size
 *
 * @param bytes - The number of bytes
 * @param decimals - Number of decimal places
 * @returns Formatted file size string
 *
 * @example
 * ```typescript
 * formatFileSize(1024); // "1 KB"
 * formatFileSize(1536000); // "1.46 MB"
 * formatFileSize(1073741824); // "1 GB"
 * ```
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Truncates text to a maximum length with ellipsis
 *
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 *
 * @example
 * ```typescript
 * truncateText('This is a very long text', 10); // "This is a..."
 * ```
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Formats a percentage value
 *
 * @param value - The decimal value (0-1)
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 *
 * @example
 * ```typescript
 * formatPercentage(0.1234); // "12.34%"
 * formatPercentage(0.5, 0); // "50%"
 * ```
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}
