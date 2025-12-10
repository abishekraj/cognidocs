/**
 * User-related type definitions
 * @module types/user
 * @since 1.0.0
 */

/**
 * User role enumeration
 * @since 1.0.0
 */
export type UserRole = 'admin' | 'moderator' | 'user' | 'guest';

/**
 * User status enumeration
 * @since 1.0.0
 */
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'banned';

/**
 * Represents a user in the system
 *
 * @interface User
 * @since 1.0.0
 */
export interface User {
  /**
   * Unique identifier for the user
   * @example 12345
   */
  id: number;

  /**
   * User's email address
   * @example "user@example.com"
   */
  email: string;

  /**
   * User's full name
   * @example "John Doe"
   */
  name: string;

  /**
   * User's assigned role
   * @default 'user'
   */
  role: UserRole;

  /**
   * Current account status
   * @default 'active'
   */
  status: UserStatus;

  /**
   * URL to user's avatar image
   * @example "https://example.com/avatars/user123.jpg"
   */
  avatarUrl?: string;

  /**
   * User's biography or description
   */
  bio?: string;

  /**
   * Date when the user account was created
   */
  createdAt: Date;

  /**
   * Date when the user account was last updated
   */
  updatedAt: Date;
}

/**
 * Partial user data for profile updates
 *
 * @interface UpdateUserProfile
 * @since 1.0.0
 */
export interface UpdateUserProfile {
  /** Updated name */
  name?: string;

  /** Updated biography */
  bio?: string;

  /** Updated avatar URL */
  avatarUrl?: string;
}

/**
 * User authentication credentials
 *
 * @interface AuthCredentials
 * @since 1.0.0
 */
export interface AuthCredentials {
  /**
   * User's email address
   * @example "user@example.com"
   */
  email: string;

  /**
   * User's password (should be hashed on server)
   * @example "SecureP@ssw0rd!"
   */
  password: string;

  /**
   * Whether to remember the user's session
   * @default false
   */
  rememberMe?: boolean;
}

/**
 * User session information
 *
 * @interface UserSession
 * @since 1.0.0
 */
export interface UserSession {
  /**
   * Authentication token
   */
  token: string;

  /**
   * Refresh token for obtaining new access tokens
   */
  refreshToken: string;

  /**
   * Token expiration timestamp
   */
  expiresAt: number;

  /**
   * Authenticated user data
   */
  user: User;
}

/**
 * Pagination parameters for user lists
 *
 * @interface UserListParams
 * @since 1.0.0
 */
export interface UserListParams {
  /**
   * Page number (1-indexed)
   * @default 1
   */
  page?: number;

  /**
   * Number of items per page
   * @default 20
   */
  limit?: number;

  /**
   * Field to sort by
   * @default 'createdAt'
   */
  sortBy?: keyof User;

  /**
   * Sort order
   * @default 'desc'
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * Filter by user role
   */
  role?: UserRole;

  /**
   * Filter by user status
   */
  status?: UserStatus;

  /**
   * Search query for name or email
   */
  search?: string;
}
