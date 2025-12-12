# formatSpecifier

Parses the specified specifier, returning an object with exposed fields that correspond to the format specification mini-language and a toString method that reconstructs the specifier. The general form of a specifier is [[fill]align][sign][symbol][0][width][,][.precision][~][type]. For reference, an explanation of the segments of the specifier string, refer to the FormatSpecifier interface properties.

**Return Type:** `FormatSpecifier`

## Parameters

| Name        | Type     | Optional | Description         |
| :---------- | :------- | :------- | :------------------ |
| `specifier` | `string` | No       | A specifier string. |
