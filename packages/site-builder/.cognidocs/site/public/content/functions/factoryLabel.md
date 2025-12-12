# factoryLabel

Parse labels. > 👉 **Note**: labels in markdown are capped at 999 characters in the string. ###### Examples `markdown [a] [a b] [a\]b] `

**Return Type:** `State`

## Parameters

| Name         | Type              | Optional | Description                          |
| :----------- | :---------------- | :------- | :----------------------------------- |
| `this`       | `TokenizeContext` | No       | -                                    |
| `effects`    | `Effects`         | No       | Context.                             |
| `ok`         | `State`           | No       | State switched to when successful.   |
| `nok`        | `State`           | No       | State switched to when unsuccessful. |
| `type`       | `TokenType`       | No       | Type of the whole label (`[a]`).     |
| `markerType` | `TokenType`       | No       | Type for the markers (`[` and `]`).  |
| `stringType` | `TokenType`       | No       | Type for the identifier (`a`).       |
