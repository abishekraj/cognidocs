# factoryDestination

Parse destinations. ###### Examples ```markdown <a> <a\>b> <a b> <a)> a a\)b a(b)c a(b) ```


**Return Type:** `State`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `effects` | `Effects` | No | Context. |
| `ok` | `State` | No | State switched to when successful. |
| `nok` | `State` | No | State switched to when unsuccessful. |
| `type` | `TokenType` | No | Type for whole (`<a>` or `b`). |
| `literalType` | `TokenType` | No | Type when enclosed (`<a>`). |
| `literalMarkerType` | `TokenType` | No | Type for enclosing (`<` and `>`). |
| `rawType` | `TokenType` | No | Type when not enclosed (`b`). |
| `stringType` | `TokenType` | No | Type for the value (`a` or `b`). |
| `max` | `number \| undefined` | Yes | - |