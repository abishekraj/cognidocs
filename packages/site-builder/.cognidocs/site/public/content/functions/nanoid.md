# nanoid

Generate secure URL-friendly unique ID. By default, the ID will have 21 symbols to have a collision probability similar to UUID v4. ```js import { nanoid } from 'nanoid' model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL" ```


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `size` | `number` | Yes | Size of the ID. The default size is 21. |