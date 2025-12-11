# encodeNonAsciiHTML

Encodes all non-ASCII characters, as well as characters not valid in HTML documents using HTML entities. This function will not encode characters that are valid in HTML documents, such as `#`. If a character has no equivalent entity, a numeric hexadecimal reference (eg. `&#xfc;`) will be used.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `input` | `string` | No | - |