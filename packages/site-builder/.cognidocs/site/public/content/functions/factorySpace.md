# factorySpace

Parse spaces and tabs. There is no `nok` parameter: *   spaces in markdown are often optional, in which case this factory can be used and `ok` will be switched to whether spaces were found or not *   one line ending or space can be detected with `markdownSpace(code)` right before using `factorySpace` ###### Examples Where `␉` represents a tab (plus how much it expands) and `␠` represents a single space. ```markdown ␉ ␠␠␠␠ ␉␠ ```


**Return Type:** `State`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `effects` | `Effects` | No | Context. |
| `ok` | `State` | No | State switched to when successful. |
| `type` | `TokenType` | No | Type (`' \t'`). |
| `max` | `number \| undefined` | Yes | - |