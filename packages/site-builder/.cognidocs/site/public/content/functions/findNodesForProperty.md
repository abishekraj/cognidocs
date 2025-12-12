# findNodesForProperty

**Return Type:** `CstNode[]`

## Parameters

| Name       | Type                   | Optional | Description                                                                                               |
| :--------- | :--------------------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `node`     | `CstNode \| undefined` | No       | A CST node in which to look for property assignments. If this is undefined, the result is an empty array. |
| `property` | `string \| undefined`  | No       | A property name of the constructed AST node. If this is undefined, the result is an empty array.          |
