# factoryWhitespace

Parse spaces and tabs. There is no `nok` parameter: *   line endings or spaces in markdown are often optional, in which case this factory can be used and `ok` will be switched to whether spaces were found or not *   one line ending or space can be detected with `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`


**Return Type:** `State`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `effects` | `Effects` | No | Context. |
| `ok` | `State` | No | State switched to when successful. |