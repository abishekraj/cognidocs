# convertPatternsToTasks

Returns tasks grouped by basic pattern directories. Patterns that can be found inside (`./`) and outside (`../`) the current directory are handled separately. This is necessary because directory traversal starts at the base directory and goes deeper.


**Return Type:** `Task[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `positive` | `Pattern[]` | No | - |
| `negative` | `Pattern[]` | No | - |
| `dynamic` | `boolean` | No | - |