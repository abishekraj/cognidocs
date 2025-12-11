# customRandom

Generate unique ID with custom random generator and alphabet. Alphabet must contain 256 symbols or less. Otherwise, the generator will not be secure. ```js import { customRandom } from 'nanoid/format' const nanoid = customRandom('abcdef', 5, size => { const random = [] for (let i = 0; i < size; i++) { random.push(randomByte()) } return random }) nanoid() //=> "fbaef" ```


**Return Type:** `() => string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `alphabet` | `string` | No | Alphabet used to generate a random string. |
| `size` | `number` | No | Size of the random string. |
| `random` | `(bytes: number) => Uint8Array` | No | A random bytes generator. |