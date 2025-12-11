# retryRequest

Retries a failed API request with exponential backoff. This utility function will retry the provided async function up to the specified number of times, with increasing delays between attempts.


**Return Type:** `Promise<T>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `fn` | `() => Promise<T>` | No | The async function to retry |
| `retries` | `number` | No | Maximum number of retry attempts (default: 3) |
| `delay` | `number` | No | Initial delay in milliseconds (default: 1000) |