# buffer

Fetches the binary file at the specified input URL and returns it as a Promise of an ArrayBuffer. If init is specified, it is passed along to the underlying call to fetch.

**Return Type:** `Promise<ArrayBuffer>`

## Parameters

| Name   | Type          | Optional | Description                                |
| :----- | :------------ | :------- | :----------------------------------------- |
| `url`  | `string`      | No       | A valid URL string.                        |
| `init` | `RequestInit` | Yes      | An optional request initialization object. |
