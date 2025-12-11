# unexpected

Transition the parser to an error state. All code needs to be written to naturally unwind in this state, which allows us to backtrack without exceptions and without error plumbing everywhere.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `message` | `string` | Yes | - |
| `pos` | `number` | Yes | - |