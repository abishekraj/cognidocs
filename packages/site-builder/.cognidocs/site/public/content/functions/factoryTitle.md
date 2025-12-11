# factoryTitle

Parse titles. ###### Examples ```markdown "a" 'b' (c) "a b" 'a b' (a\)b) ```


**Return Type:** `State`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `effects` | `Effects` | No | Context. |
| `ok` | `State` | No | State switched to when successful. |
| `nok` | `State` | No | State switched to when unsuccessful. |
| `type` | `TokenType` | No | Type of the whole title (`"a"`, `'b'`, `(c)`). |
| `markerType` | `TokenType` | No | Type for the markers (`"`, `'`, `(`, and `)`). |
| `stringType` | `TokenType` | No | Type for the value (`a`). |