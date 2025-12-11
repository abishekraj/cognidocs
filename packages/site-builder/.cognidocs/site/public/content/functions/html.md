# html

Fetches the file at the specified input URL as text, parses it as HTML and returns a Promise of an HTML DOM Document. If init is specified, it is passed along to the underlying call to fetch.


**Return Type:** `Promise<Document>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `url` | `string` | No | A valid URL string. |
| `init` | `RequestInit` | Yes | An optional request initialization object. |