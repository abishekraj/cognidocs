# UserService

Service class for managing user-related API operations.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `baseUrl` | `string` | - |
| `apiKey` | `string` | - |

## Methods
### getUser
**Return:** `Promise<User>`

### listUsers
**Return:** `Promise<User[]>`

### updateUser
**Return:** `Promise<User>`

### deleteUser
**Return:** `Promise<void>`

### getHeaders
**Return:** `Record<string, string>`

### isValidUserId
**Return:** `boolean`
