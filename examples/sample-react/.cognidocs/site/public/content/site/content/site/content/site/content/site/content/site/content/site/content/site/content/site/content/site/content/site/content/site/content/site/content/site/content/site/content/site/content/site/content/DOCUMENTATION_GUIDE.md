# CogniDocs Documentation Guide

This guide explains the documentation formats and JSDoc tags supported by CogniDocs for TypeScript and React projects.

## Table of Contents

- [Overview](#overview)
- [Supported JSDoc Tags](#supported-jsdoc-tags)
- [Component Documentation](#component-documentation)
- [Function Documentation](#function-documentation)
- [Class Documentation](#class-documentation)
- [Interface and Type Documentation](#interface-and-type-documentation)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Overview

CogniDocs supports standard JSDoc syntax with TypeScript extensions (TSDoc-compatible). All documentation comments should use the `/** ... */` block comment format.

### Basic Format

```typescript
/**
 * Brief description of the element
 *
 * Longer description providing more details about usage,
 * behavior, and any important notes.
 *
 * @tag-name Tag description
 */
```

## Supported JSDoc Tags

### Core Tags

| Tag | Description | Example |
|-----|-------------|---------|
| `@param` | Documents a function parameter | `@param userId - The ID of the user` |
| `@returns` | Documents the return value | `@returns A promise resolving to user data` |
| `@throws` | Documents errors that may be thrown | `@throws {Error} When the user is not found` |
| `@example` | Provides usage examples | `@example` followed by code block |
| `@since` | Version when element was added | `@since 1.0.0` |
| `@deprecated` | Marks element as deprecated | `@deprecated Use newFunction instead` |
| `@see` | References related documentation | `@see {@link OtherClass}` |
| `@template` | Defines generic type parameters | `@template T The type of data` |
| `@default` | Documents default values | `@default 'primary'` |

### Type Tags

| Tag | Description | Example |
|-----|-------------|---------|
| `@type` | Specifies a variable's type | `@type {string}` |
| `@typedef` | Defines a custom type | `@typedef {Object} UserData` |
| `@interface` | Documents an interface | `@interface UserProps` |
| `@property` | Documents object property | `@property {string} name` |

### Module Tags

| Tag | Description | Example |
|-----|-------------|---------|
| `@module` | Identifies a module | `@module utils/api` |
| `@file` | File-level documentation | `@file API utility functions` |

### React-Specific

| Tag | Description | Example |
|-----|-------------|---------|
| `@component` | Marks a React component | `@component` |

### Access Modifiers

| Tag | Description |
|-----|-------------|
| `@public` | Public API (default) |
| `@private` | Private, internal use only |
| `@protected` | Protected access |

## Component Documentation

### React Function Components

CogniDocs extracts component metadata including props, hooks, and JSDoc comments.

```tsx
/**
 * A customizable button component for user interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 *
 * @since 1.0.0
 */
export const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  // Component implementation
};
```

### Props Interface

Document each prop in the interface:

```tsx
/**
 * Props for the Button component
 */
export interface ButtonProps {
  /**
   * The button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger';

  /**
   * Button click handler
   */
  onClick?: () => void;

  /**
   * Button content
   */
  children: React.ReactNode;
}
```

### Inline Props

You can also use inline props with JSDoc:

```tsx
export function Input({
  label,
  value,
  onChange,
}: {
  /** Label text displayed above the input */
  label: string;

  /** Current input value */
  value: string;

  /** Callback fired when input value changes */
  onChange: (value: string) => void;
}) {
  // Component implementation
}
```

## Function Documentation

### Basic Function

```typescript
/**
 * Formats a date string to a readable format.
 *
 * @param date - The date to format
 * @param locale - The locale string (e.g., 'en-US')
 * @returns The formatted date string
 *
 * @example
 * ```typescript
 * const formatted = formatDate(new Date(), 'en-US');
 * console.log(formatted); // "December 10, 2025"
 * ```
 *
 * @since 1.0.0
 */
export function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale);
}
```

### Async Functions

```typescript
/**
 * Fetches data from the specified API endpoint.
 *
 * @template T The expected type of the response data
 * @param url - The API endpoint URL
 * @param config - Optional configuration
 * @returns A promise that resolves to the API response
 * @throws {Error} When the network request fails
 *
 * @example
 * ```typescript
 * const response = await fetchData<User>('/api/users/1');
 * console.log(response.data);
 * ```
 */
export async function fetchData<T>(
  url: string,
  config?: ApiConfig
): Promise<ApiResponse<T>> {
  // Implementation
}
```

### Generic Functions

```typescript
/**
 * Retries a failed operation with exponential backoff.
 *
 * @template T The return type of the operation
 * @param fn - The async function to retry
 * @param retries - Maximum number of retry attempts
 * @param delay - Initial delay in milliseconds
 * @returns A promise resolving to the function's result
 *
 * @example
 * ```typescript
 * const data = await retryRequest(
 *   () => fetchData('/api/data'),
 *   3,
 *   1000
 * );
 * ```
 */
export async function retryRequest<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  // Implementation
}
```

## Class Documentation

### Class Definition

```typescript
/**
 * Service class for managing user-related API operations.
 *
 * @class UserService
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * const service = new UserService('https://api.example.com');
 * const user = await service.getUser(123);
 * ```
 */
export class UserService {
  /**
   * Base URL for the API
   * @private
   */
  private baseUrl: string;

  /**
   * Creates a new UserService instance
   *
   * @param baseUrl - The base URL for the API
   * @param apiKey - Optional API key for authentication
   */
  constructor(baseUrl: string, apiKey?: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Fetches a single user by ID
   *
   * @param userId - The ID of the user to fetch
   * @returns A promise that resolves to the user data
   * @throws {Error} If the user is not found
   */
  async getUser(userId: number): Promise<User> {
    // Implementation
  }

  /**
   * Static method to validate user IDs
   *
   * @param userId - The user ID to validate
   * @returns True if valid, false otherwise
   * @since 1.1.0
   */
  static isValidUserId(userId: number): boolean {
    return Number.isInteger(userId) && userId > 0;
  }
}
```

## Interface and Type Documentation

### Interface

```typescript
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
   * User's assigned role
   * @default 'user'
   */
  role: UserRole;
}
```

### Type Alias

```typescript
/**
 * User role enumeration
 * @since 1.0.0
 */
export type UserRole = 'admin' | 'moderator' | 'user' | 'guest';

/**
 * Generic API response wrapper
 * @template T The type of data in the response
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
  success: boolean;
};
```

## Best Practices

### 1. Write Clear Descriptions

- Start with a brief one-line summary
- Follow with detailed explanation if needed
- Use complete sentences
- Focus on "what" and "why", not "how"

✅ Good:
```typescript
/**
 * Validates user email addresses for registration.
 *
 * Checks format, domain validity, and ensures the email
 * is not already registered in the system.
 */
```

❌ Bad:
```typescript
/**
 * email validator
 */
```

### 2. Document All Public APIs

- Always document exported functions, classes, and interfaces
- Private methods can have shorter documentation
- Include examples for complex APIs

### 3. Use `@example` Liberally

- Provide realistic usage examples
- Include both simple and complex use cases
- Use proper syntax highlighting with code blocks

```typescript
/**
 * @example
 * ```typescript
 * // Simple usage
 * const result = myFunction('input');
 *
 * // Advanced usage
 * const result = myFunction('input', {
 *   option1: true,
 *   option2: 'value',
 * });
 * ```
 */
```

### 4. Document Parameters Thoroughly

```typescript
/**
 * @param userId - The unique identifier of the user (positive integer)
 * @param options - Configuration options
 * @param options.includeDeleted - Whether to include deleted users
 * @param options.fields - Specific fields to retrieve
 */
```

### 5. Mark Deprecated APIs

```typescript
/**
 * @deprecated Use fetchUserById instead. This method will be removed in v2.0.0.
 * @see {@link fetchUserById}
 */
export function getUser(id: number): Promise<User> {
  // Implementation
}
```

### 6. Use `@since` for Versioning

```typescript
/**
 * Advanced filtering options for user queries
 * @since 1.2.0
 */
export interface UserFilterOptions {
  // Interface definition
}
```

### 7. Cross-Reference Related APIs

```typescript
/**
 * Creates a new user account
 * @see {@link updateUser} for modifying existing users
 * @see {@link deleteUser} for removing users
 * @see {@link User} for the user data structure
 */
```

## Examples

### Complete Component Example

```tsx
import React, { useState } from 'react';

/**
 * Props for the Card component
 * @since 1.0.0
 */
export interface CardProps {
  /**
   * The title displayed at the top of the card
   * @example "User Profile"
   */
  title: string;

  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Visual variant
   * @default 'default'
   */
  variant?: 'default' | 'elevated';

  /**
   * Click handler
   * @param event - The click event
   */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * A flexible card component for displaying content.
 *
 * The Card component provides a container with consistent
 * styling and optional interactive features.
 *
 * @component
 * @example
 * ```tsx
 * <Card title="Example" variant="elevated">
 *   <p>Content here</p>
 * </Card>
 * ```
 *
 * @since 1.0.0
 * @see {@link CardProps}
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card card-${variant}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};
```

### Complete Function Example

```typescript
/**
 * Retries a failed API request with exponential backoff.
 *
 * This utility will retry the provided async function up to
 * the specified number of times with increasing delays.
 *
 * @template T The return type of the async function
 * @param fn - The async function to retry
 * @param retries - Maximum retry attempts
 * @param delay - Initial delay in milliseconds
 * @returns A promise resolving to the function's result
 * @throws {Error} The last error if all retries fail
 *
 * @example
 * ```typescript
 * // Retry a fetch operation
 * const data = await retryRequest(
 *   () => fetch('/api/data').then(r => r.json()),
 *   3,
 *   1000
 * );
 * ```
 *
 * @since 1.1.0
 * @see {@link fetchData}
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
        await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt)));
      }
    }
  }

  throw lastError || new Error('Request failed after retries');
}
```

## Summary

CogniDocs supports:

- ✅ **JSDoc** - Standard JavaScript documentation format
- ✅ **TSDoc** - TypeScript-specific extensions
- ✅ **React Components** - Props, hooks, and component-specific patterns
- ✅ **TypeScript Generics** - `@template` tag for generic parameters
- ✅ **Code Examples** - Markdown code blocks in `@example` tags
- ✅ **Cross-References** - `@see` links to related APIs
- ✅ **Versioning** - `@since` and `@deprecated` tags

For more information, see the official [JSDoc documentation](https://jsdoc.app/) and [TSDoc specification](https://tsdoc.org/).
