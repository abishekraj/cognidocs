# timeInterval

Constructs a new custom interval given the specified floor and offset functions. The returned custom interval is not countable, i.e. does not expose the methods "count(..)" and "every(...)".


**Return Type:** `TimeInterval`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `floor` | `(date: Date) => void` | No | A floor function which takes a single date as an argument and rounds it down to the nearest interval boundary. |
| `offset` | `(date: Date, step: number) => void` | No | An offset function which takes a date and an integer step as arguments and advances the specified date by the specified number of boundaries; the step may be positive, negative or zero. |