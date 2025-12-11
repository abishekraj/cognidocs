# traceToNode

**Return Type:** `(content?: Generated | ((node: CompositeGeneratorNode) => void)) => CompositeGeneratorNode`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `astNode` | `T` | No | the AstNode corresponding to the appended content |
| `property` | `Properties<T>` | Yes | the value property name (string) corresponding to the appended content, if e.g. the content corresponds to some `string` or `number` property of `astNode`, is optional |