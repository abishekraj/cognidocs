# generateId

Return a unique id based on the given string. Start with the prefix, then a hyphen, then the simplified str, then a hyphen, then a unique uuid based on the str. (Hyphens are only included if needed.) Although the official XML standard for ids says that many more characters are valid in the id, this keeps things simple by accepting only A-Za-z0-9.

**Return Type:** `string`

## Parameters

| Name     | Type     | Optional | Description                                                  |
| :------- | :------- | :------- | :----------------------------------------------------------- |
| `str`    | `string` | Yes      | Given string to use as the basis for the id. Default is `''` |
| `prefix` | `string` | Yes      | String to put at the start, followed by '-'. Default is `''` |
