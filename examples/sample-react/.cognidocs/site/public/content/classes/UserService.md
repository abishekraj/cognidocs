# UserService

Service class for managing user-related API operations. This class provides methods for CRUD operations on users, including fetching, creating, updating, and deleting user data.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `baseUrl` | `string` | - |
| `apiKey` | `string` | - |

## Methods
### getUser

Fetches a single user by ID

**Return:** `Promise<User>`

### listUsers

Fetches a list of users with optional filtering and pagination

**Return:** `Promise<User[]>`

### updateUser

Updates a user's profile information

**Return:** `Promise<User>`

### deleteUser

Deletes a user by ID

**Return:** `Promise<void>`

### getHeaders

Gets the default headers for API requests

**Return:** `Record<string, string>`

### isValidUserId

Validates if a user ID is valid

**Return:** `boolean`
