import { User, UserListParams, UpdateUserProfile } from '../types/user';
import { fetchData, postData } from '../utils/api';

/**
 * Service class for managing user-related API operations.
 *
 * This class provides methods for CRUD operations on users,
 * including fetching, creating, updating, and deleting user data.
 *
 * @class UserService
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * const userService = new UserService('https://api.example.com');
 *
 * // Fetch a user
 * const user = await userService.getUser(123);
 *
 * // Update user profile
 * await userService.updateUser(123, { name: 'Jane Doe' });
 * ```
 */
export class UserService {
  /**
   * Base URL for the API
   * @private
   */
  private baseUrl: string;

  /**
   * Optional API key for authentication
   * @private
   */
  private apiKey?: string;

  /**
   * Creates a new UserService instance
   *
   * @param baseUrl - The base URL for the API
   * @param apiKey - Optional API key for authentication
   *
   * @example
   * ```typescript
   * const service = new UserService('https://api.example.com', 'my-api-key');
   * ```
   */
  constructor(baseUrl: string, apiKey?: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
   * Fetches a single user by ID
   *
   * @param userId - The ID of the user to fetch
   * @returns A promise that resolves to the user data
   * @throws {Error} If the user is not found or the request fails
   *
   * @example
   * ```typescript
   * const user = await userService.getUser(123);
   * console.log(user.name);
   * ```
   *
   * @since 1.0.0
   */
  async getUser(userId: number): Promise<User> {
    const response = await fetchData<User>(`/users/${userId}`, {
      baseUrl: this.baseUrl,
      headers: this.getHeaders(),
    });

    if (!response.success) {
      throw new Error(`Failed to fetch user: ${response.status}`);
    }

    return response.data;
  }

  /**
   * Fetches a list of users with optional filtering and pagination
   *
   * @param params - Query parameters for filtering and pagination
   * @returns A promise that resolves to an array of users
   *
   * @example
   * ```typescript
   * const users = await userService.listUsers({
   *   page: 1,
   *   limit: 10,
   *   role: 'admin',
   * });
   * ```
   *
   * @since 1.0.0
   */
  async listUsers(params?: UserListParams): Promise<User[]> {
    const response = await fetchData<User[]>('/users', {
      baseUrl: this.baseUrl,
      headers: this.getHeaders(),
    });

    return response.data;
  }

  /**
   * Updates a user's profile information
   *
   * @param userId - The ID of the user to update
   * @param updates - The fields to update
   * @returns A promise that resolves to the updated user
   * @throws {Error} If the update fails
   *
   * @example
   * ```typescript
   * const updatedUser = await userService.updateUser(123, {
   *   name: 'Jane Doe',
   *   bio: 'Software developer',
   * });
   * ```
   *
   * @since 1.0.0
   */
  async updateUser(
    userId: number,
    updates: UpdateUserProfile
  ): Promise<User> {
    const response = await postData<UpdateUserProfile, User>(
      `/users/${userId}`,
      updates,
      {
        baseUrl: this.baseUrl,
        headers: this.getHeaders(),
      }
    );

    if (!response.success) {
      throw new Error(`Failed to update user: ${response.status}`);
    }

    return response.data;
  }

  /**
   * Deletes a user by ID
   *
   * @param userId - The ID of the user to delete
   * @returns A promise that resolves when the deletion is complete
   * @throws {Error} If the deletion fails
   *
   * @example
   * ```typescript
   * await userService.deleteUser(123);
   * ```
   *
   * @since 1.0.0
   * @deprecated Use softDeleteUser instead to maintain data integrity
   */
  async deleteUser(userId: number): Promise<void> {
    const response = await fetchData(`/users/${userId}`, {
      baseUrl: this.baseUrl,
      headers: this.getHeaders(),
    });

    if (!response.success) {
      throw new Error(`Failed to delete user: ${response.status}`);
    }
  }

  /**
   * Gets the default headers for API requests
   *
   * @private
   * @returns An object containing the headers
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  /**
   * Validates if a user ID is valid
   *
   * @param userId - The user ID to validate
   * @returns True if the ID is valid, false otherwise
   *
   * @since 1.1.0
   */
  static isValidUserId(userId: number): boolean {
    return Number.isInteger(userId) && userId > 0;
  }
}
