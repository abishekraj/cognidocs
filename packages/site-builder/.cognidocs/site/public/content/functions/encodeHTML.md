# encodeHTML

Encodes all characters in the input using HTML entities. This includes characters that are valid ASCII characters in HTML documents, such as `#`. To get a more compact output, consider using the `encodeNonAsciiHTML` function, which will only encode characters that are not valid in HTML documents, as well as non-ASCII characters. If a character has no equivalent entity, a numeric hexadecimal reference (eg. `&#xfc;`) will be used.

**Return Type:** `string`

## Parameters

| Name    | Type     | Optional | Description |
| :------ | :------- | :------- | :---------- |
| `input` | `string` | No       | -           |
