# decodeNumericCharacterReference

Turn the number (in string form as either hexa- or plain decimal) coming from a numeric character reference into a character. Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes non-characters and control characters safe.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `value` | `string` | No | Value to decode. |
| `base` | `number` | No | Numeric base. |