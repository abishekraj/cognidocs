# dsvFormat

Constructs a new DSV parser and formatter for the specified delimiter.


**Return Type:** `DSV`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `delimiter` | `string` | No | A delimiter character. The delimiter must be a single character (i.e., a single 16-bit code unit); so, ASCII delimiters are fine, but emoji delimiters are not. |