# UserListParams

Pagination parameters for user lists

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `page` | `number` | Yes | - |
| `limit` | `number` | Yes | - |
| `sortBy` | `keyof User` | Yes | - |
| `sortOrder` | `'asc' | 'desc'` | Yes | - |
| `role` | `UserRole` | Yes | - |
| `status` | `UserStatus` | Yes | - |
| `search` | `string` | Yes | - |