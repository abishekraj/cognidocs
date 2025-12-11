# postData

Posts data to the specified API endpoint.


**Return Type:** `Promise<ApiResponse<R>>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `url` | `string` | No | The API endpoint URL |
| `data` | `T` | No | The data to send in the request body |
| `config` | `Partial<ApiConfig>` | Yes | Optional configuration for the request |