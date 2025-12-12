# format

Returns a new format function for the given string specifier. The returned function takes a number as the only argument, and returns a string representing the formatted number. Uses the current default locale. The general form of a specifier is [[fill]align][sign][symbol][0][width][,][.precision][~][type]. For reference, an explanation of the segments of the specifier string, refer to the FormatSpecifier interface properties.

**Return Type:** `(n: number | { valueOf(): number }) => string`

## Parameters

| Name        | Type     | Optional | Description         |
| :---------- | :------- | :------- | :------------------ |
| `specifier` | `string` | No       | A Specifier string. |
