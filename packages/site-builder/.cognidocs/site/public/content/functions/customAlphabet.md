# customAlphabet

Generate secure unique ID with custom alphabet. Alphabet must contain 256 symbols or less. Otherwise, the generator will not be secure.


**Return Type:** `(size?: number) => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `alphabet` | `string` | No | Alphabet used to generate the ID. |
| `defaultSize` | `number` | Yes | Size of the ID. The default size is 21. |