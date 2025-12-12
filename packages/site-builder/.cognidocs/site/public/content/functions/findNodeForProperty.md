# findNodeForProperty

**Return Type:** `CstNode | undefined`

## Parameters

| Name       | Type                   | Optional | Description                                                                                                                                                                                                                                                     |
| :--------- | :--------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node`     | `CstNode \| undefined` | No       | A CST node in which to look for property assignments. If this is undefined, the result is `undefined`.                                                                                                                                                          |
| `property` | `string \| undefined`  | No       | A property name of the constructed AST node. If this is undefined, the result is `undefined`.                                                                                                                                                                   |
| `index`    | `number`               | Yes      | If no index is specified or the index is less than zero, the first found node is returned. If the specified index exceeds the number of assignments to the property, the last found node is returned. Otherwise, the node with the specified index is returned. |
