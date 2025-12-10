# retryRequest

Retries a failed API request with exponential backoff.


**Return Type:** `Promise<T>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `fn` | `() => Promise<T>` | No | - |
| `retries` | `number` | No | - |
| `delay` | `number` | No | - |