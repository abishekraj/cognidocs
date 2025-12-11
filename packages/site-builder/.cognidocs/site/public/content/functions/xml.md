# xml

Fetches the file at the specified input URL as text, parses it as XML and returns a Promise of an XML Document. If init is specified, it is passed along to the underlying call to fetch.


**Return Type:** `Promise<XMLDocument>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `url` | `string` | No | A valid URL string. |
| `init` | `RequestInit` | Yes | An optional request initialization object. |