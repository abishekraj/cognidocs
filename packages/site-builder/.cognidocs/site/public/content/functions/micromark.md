# micromark

Compile markdown to HTML. > Note: which encodings are supported depends on the engine. > For info on Node.js, see: > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `value` | `Value` | No | Markdown to parse (`string` or `Uint8Array`). |
| `encoding` | `Encoding \| null \| undefined` | No | Character encoding to understand `value` as when it’s a `Uint8Array` (`string`, default: `'utf8'`). |
| `options` | `Options \| null \| undefined` | Yes | - |