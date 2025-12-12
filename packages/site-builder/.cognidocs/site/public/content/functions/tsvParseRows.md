# tsvParseRows

Parses the specified string, which must be in the tab-separated values format, returning an array of arrays representing the parsed rows. Unlike tsvParse, this method treats the header line as a standard row, and should be used whenever TSV content does not contain a header. Each row is represented as an array rather than an object. Rows may have variable length. If a row conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types. In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the + operator), but better is to specify a row conversion function. Equivalent to `dsvFormat("\t").parseRows`.

**Return Type:** `string[][]`

## Parameters

| Name        | Type     | Optional | Description                                                 |
| :---------- | :------- | :------- | :---------------------------------------------------------- |
| `tsvString` | `string` | No       | A string, which must be in the tab-separated values format. |
