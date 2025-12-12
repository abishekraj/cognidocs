/**
 * API utility functions for making HTTP requests
 * @module api
 * @since 1.0.0
 */

/**
 * Configuration options for API requests
 */
export interface ApiConfig {
  /** Base URL for all API requests */
  baseUrl: string;

  /** Default timeout in milliseconds */
  timeout?: number;

  /** Default headers to include in all requests */
  headers?: Record<string, string>;
}

/**
 * Response wrapper for API calls
 * @template T The type of data returned in the response
 */
export interface ApiResponse<T> {
  /** The response data */
  data: T;

  /** HTTP status code */
  status: number;

  /** Response headers */
  headers: Record<string, string>;

  /** Whether the request was successful */
  success: boolean;
}

/**
 * Fetches data from the specified API endpoint.
 *
 * This is an async function that makes a GET request to the provided URL
 * and returns the parsed JSON response.
 *
 * @template T The expected type of the response data
 * @param url - The API endpoint URL to fetch from
 * @param config - Optional configuration for the request
 * @returns A promise that resolves to the API response
 * @throws {Error} When the network request fails or returns an error status
 *
 * @example
 * ```typescript
 * interface User {
 *   id: number;
 *   name: string;
 * }
 *
 * const response = await fetchData<User>('/api/users/1');
 * console.log(response.data.name);
 * ```
 *
 * @example
 * ```typescript
 * // With custom config
 * const response = await fetchData<User[]>('/api/users', {
 *   baseUrl: 'https://api.example.com',
 *   timeout: 5000,
 * });
 * ```
 *
 * @since 1.0.0
 * @see {@link ApiConfig} for configuration options
 * @see {@link ApiResponse} for response structure
 */
export async function fetchData<T>(
  url: string,
  config?: Partial<ApiConfig>
): Promise<ApiResponse<T>> {
  const fullUrl = config?.baseUrl ? `${config.baseUrl}${url}` : url;

  try {
    const response = await fetch(fullUrl, {
      headers: config?.headers,
      signal: config?.timeout ? AbortSignal.timeout(config.timeout) : undefined,
    });

    const data = await response.json();

    return {
      data,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      success: response.ok,
    };
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}: ${error}`);
  }
}

/**
 * Posts data to the specified API endpoint.
 *
 * @template T The type of data being sent
 * @template R The expected type of the response data
 * @param url - The API endpoint URL
 * @param data - The data to send in the request body
 * @param config - Optional configuration for the request
 * @returns A promise that resolves to the API response
 * @throws {Error} When the network request fails
 *
 * @example
 * ```typescript
 * interface CreateUserRequest {
 *   name: string;
 *   email: string;
 * }
 *
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 * }
 *
 * const response = await postData<CreateUserRequest, User>('/api/users', {
 *   name: 'John Doe',
 *   email: 'john@example.com',
 * });
 * ```
 *
 * @since 1.0.0
 */
export async function postData<T, R = T>(
  url: string,
  data: T,
  config?: Partial<ApiConfig>
): Promise<ApiResponse<R>> {
  const fullUrl = config?.baseUrl ? `${config.baseUrl}${url}` : url;

  try {
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      body: JSON.stringify(data),
      signal: config?.timeout ? AbortSignal.timeout(config.timeout) : undefined,
    });

    const responseData = await response.json();

    return {
      data: responseData,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      success: response.ok,
    };
  } catch (error) {
    throw new Error(`Failed to post data to ${url}: ${error}`);
  }
}

/**
 * Retries a failed API request with exponential backoff.
 *
 * This utility function will retry the provided async function up to the
 * specified number of times, with increasing delays between attempts.
 *
 * @template T The return type of the async function
 * @param fn - The async function to retry
 * @param retries - Maximum number of retry attempts (default: 3)
 * @param delay - Initial delay in milliseconds (default: 1000)
 * @returns A promise that resolves to the function's return value
 * @throws {Error} The last error encountered if all retries fail
 *
 * @example
 * ```typescript
 * const data = await retryRequest(
 *   () => fetchData<User>('/api/users/1'),
 *   3,
 *   1000
 * );
 * ```
 *
 * @since 1.1.0
 */
export async function retryRequest<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt < retries) {
        // Exponential backoff: delay * 2^attempt
        const waitTime = delay * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }
  }

  throw lastError || new Error('Request failed after retries');
}

/**
 * Builds a URL with query parameters.
 *
 * @param baseUrl - The base URL
 * @param params - Object containing query parameters
 * @returns The complete URL with encoded query parameters
 *
 * @example
 * ```typescript
 * const url = buildUrl('/api/users', { page: 1, limit: 10, sort: 'name' });
 * // Returns: '/api/users?page=1&limit=10&sort=name'
 * ```
 *
 * @since 1.0.0
 */
export function buildUrl(
  baseUrl: string,
  params: Record<string, string | number | boolean>
): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
