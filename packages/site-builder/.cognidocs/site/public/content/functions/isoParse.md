# isoParse

The full ISO 8601 UTC time parser. Where available, this method will use the Date constructor to parse strings. If you depend on strict validation of the input format according to ISO 8601, you should construct a UTC parser function using utcParse.


**Return Type:** `Date | null`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `dateString` | `string` | No | A string encoded date to parse. |