# addConflict

Sets `conflicts[v][w] = true`, creating objects if needed.

**Return Type:** `void`

## Parameters

| Name                              | Type | Optional | Description |
| :-------------------------------- | :--- | :------- | :---------- |
| `conflicts`                       | `{   |
| [nodeId: string \| number]: {     |
| [nodeId: string \| number]: true; |

    };

}`| No | - |
|`v`|`string \| number`| No | First Node ID |
|`w`|`string \| number` | No | Second Node ID |
