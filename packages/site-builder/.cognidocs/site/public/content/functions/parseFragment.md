# parseFragment

Parses an HTML fragment.


**Return Type:** `T['documentFragment']`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `fragmentContext` | `T['parentNode'] \| null` | No | Parsing context element. If specified, given fragment will be parsed as if it was set to the context element's `innerHTML` property. |
| `html` | `string` | No | Input HTML fragment string. |
| `options` | `ParserOptions<T>` | No | Parsing options. |