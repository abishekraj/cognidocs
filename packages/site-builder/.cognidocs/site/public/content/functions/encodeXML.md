# encodeXML

Encodes all non-ASCII characters, as well as characters not valid in XML documents using XML entities. If a character has no equivalent entity, a numeric hexadecimal reference (eg. `&#xfc;`) will be used.

**Return Type:** `string`

## Parameters

| Name    | Type     | Optional | Description |
| :------ | :------- | :------- | :---------- |
| `input` | `string` | No       | -           |
