# findNodeForKeyword

**Return Type:** `CstNode | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `node` | `CstNode \| undefined` | No | A CST node in which to look for keywords. If this is undefined, the result is `undefined`. |
| `keyword` | `string` | No | A keyword as specified in the grammar. |
| `index` | `number` | Yes | If no index is specified or the index is less than zero, the first found node is returned. If the specified index exceeds the number of keyword occurrences, the last found node is returned. Otherwise, the node with the specified index is returned. |