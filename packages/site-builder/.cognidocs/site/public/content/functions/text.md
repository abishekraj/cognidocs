# text

Fetches the text file at the specified input URL and returns it as a Promise of a string. If init is specified, it is passed along to the underlying call to fetch.

**Return Type:** `Promise<string>`

## Parameters

| Name   | Type          | Optional | Description                                |
| :----- | :------------ | :------- | :----------------------------------------- |
| `url`  | `string`      | No       | A valid URL string.                        |
| `init` | `RequestInit` | Yes      | An optional request initialization object. |
