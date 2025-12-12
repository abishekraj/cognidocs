# csvFormat

Formats the specified array of object rows as comma-separated values, returning a string. This operation is the inverse of csvParse. Each row will be separated by a newline (\n), and each column within each row will be separated by the comma-delimiter. Values that contain either the comma-delimiter, a double-quote (") or a newline will be escaped using double-quotes. If columns is not specified, the list of column names that forms the header row is determined by the union of all properties on all objects in rows; the order of columns is nondeterministic. Equivalent to `dsvFormat(",").format`.

**Return Type:** `string`

## Parameters

| Name      | Type                     | Optional | Description                                        |
| :-------- | :----------------------- | :------- | :------------------------------------------------- |
| `rows`    | `readonly T[]`           | No       | Array of object rows.                              |
| `columns` | `ReadonlyArray<keyof T>` | Yes      | An array of strings representing the column names. |
