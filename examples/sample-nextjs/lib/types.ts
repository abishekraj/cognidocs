/**
 * Core type definitions for the Next.js application
 *
 * Contains shared interfaces and types used across
 * the application for type safety and documentation.
 *
 * @module types
 */

/**
 * User authentication status
 */
export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

/**
 * User role in the application
 */
export type UserRole = 'admin' | 'user' | 'guest';

/**
 * Blog post status
 */
export type PostStatus = 'draft' | 'published' | 'archived';

/**
 * Represents a user in the system
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** User's email address */
  email: string;
  /** User's display name */
  name: string;
  /** User's role in the system */
  role: UserRole;
  /** URL to user's avatar image */
  avatar?: string;
  /** Timestamp of account creation */
  createdAt: Date;
  /** Timestamp of last login */
  lastLoginAt?: Date;
}

/**
 * Represents a blog post
 */
export interface Post {
  /** Unique post identifier */
  id: string;
  /** Post title */
  title: string;
  /** Post content in markdown format */
  content: string;
  /** URL-friendly slug for the post */
  slug: string;
  /** Author of the post */
  author: User;
  /** Post publication status */
  status: PostStatus;
  /** Array of tag names */
  tags: string[];
  /** Number of views */
  views: number;
  /** Timestamp of post creation */
  createdAt: Date;
  /** Timestamp of last update */
  updatedAt: Date;
  /** Timestamp of publication */
  publishedAt?: Date;
}

/**
 * API response wrapper with success/error handling
 *
 * @template T - The type of data returned on success
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data (present on success) */
  data?: T;
  /** Error message (present on failure) */
  error?: string;
  /** Additional error details */
  details?: Record<string, unknown>;
}

/**
 * Pagination metadata for list responses
 */
export interface PaginationMeta {
  /** Current page number (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items */
  totalItems: number;
  /** Total number of pages */
  totalPages: number;
  /** Whether there is a next page */
  hasNext: boolean;
  /** Whether there is a previous page */
  hasPrev: boolean;
}

/**
 * Paginated list response
 *
 * @template T - The type of items in the list
 */
export interface PaginatedResponse<T> {
  /** Array of items for the current page */
  items: T[];
  /** Pagination metadata */
  meta: PaginationMeta;
}

/**
 * Form validation error
 */
export interface ValidationError {
  /** Field name that failed validation */
  field: string;
  /** Error message */
  message: string;
  /** Error code for programmatic handling */
  code?: string;
}

/**
 * Generic form state for managing form data
 *
 * @template T - The type of form data
 */
export interface FormState<T> {
  /** Current form field values */
  values: T;
  /** Field-level validation errors */
  errors: Record<keyof T, string>;
  /** Whether form is currently submitting */
  isSubmitting: boolean;
  /** Whether form has been modified */
  isDirty: boolean;
  /** Whether form has been submitted */
  isSubmitted: boolean;
}
