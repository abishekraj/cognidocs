# tsvFormatBody

Equivalent to dsvFormat("\t").formatBody.

**Return Type:** `string`

## Parameters

| Name      | Type                     | Optional | Description                                        |
| :-------- | :----------------------- | :------- | :------------------------------------------------- |
| `rows`    | `readonly T[]`           | No       | Array of object rows.                              |
| `columns` | `ReadonlyArray<keyof T>` | Yes      | An array of strings representing the column names. |
