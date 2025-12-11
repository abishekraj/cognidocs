# interrupt

Interrupts the active transition of the specified name on the specified node, and cancels any pending transitions with the specified name, if any. If a name is not specified, null is used.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `node` | `BaseType` | No | Element for which the transition should be interrupted. |
| `name` | `string` | Yes | Name of the transition to be interrupted. If a name is not specified, null is used. |