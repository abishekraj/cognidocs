# Response

Response by server to client request message.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `"response"` | No | - |
| `request_seq` | `number` | No | - |
| `success` | `boolean` | No | - |
| `command` | `string` | No | - |
| `message` | `string` | Yes | - |
| `body` | `any` | Yes | - |
| `metadata` | `unknown` | Yes | - |
| `performanceData` | `PerformanceData` | Yes | - |