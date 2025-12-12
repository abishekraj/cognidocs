# csvFormatRows

Formats the specified array of array of string rows as comma-separated values, returning a string. This operation is the reverse of csvParseRows. Each row will be separated by a newline (\n), and each column within each row will be separated by the comma-delimiter. Values that contain either the comma-delimiter, a double-quote (") or a newline will be escaped using double-quotes. To convert an array of objects to an array of arrays while explicitly specifying the columns, use array.map. If you like, you can also array.concat this result with an array of column names to generate the first row. Equivalent to `dsvFormat(",").formatRows`.

**Return Type:** `string`

## Parameters

| Name   | Type                  | Optional | Description                       |
| :----- | :-------------------- | :------- | :-------------------------------- |
| `rows` | `readonly string[][]` | No       | An array of array of string rows. |
