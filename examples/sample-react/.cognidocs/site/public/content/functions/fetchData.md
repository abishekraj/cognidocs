# fetchData

Fetches data from the specified API endpoint. This is an async function that makes a GET request to the provided URL and returns the parsed JSON response.


**Return Type:** `Promise<ApiResponse<T>>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `url` | `string` | No | The API endpoint URL to fetch from |
| `config` | `Partial<ApiConfig>` | Yes | Optional configuration for the request |