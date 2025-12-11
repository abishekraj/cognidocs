# findAndReplace

Find patterns in a tree and replace them. The algorithm searches the tree in *preorder* for complete values in `Text` nodes. Partial matches are not supported.


**Return Type:** `undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tree` | `Nodes` | No | Tree to change. |
| `list` | `FindAndReplaceList \| FindAndReplaceTuple` | No | Patterns to find. |
| `options` | `Options \| null \| undefined` | Yes | - |