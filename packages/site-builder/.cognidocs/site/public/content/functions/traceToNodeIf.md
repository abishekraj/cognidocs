# traceToNodeIf

**Return Type:** `(content?: Generated | ((node: CompositeGeneratorNode) => void)) => CompositeGeneratorNode | undefined`

## Parameters

| Name        | Type            | Optional | Description                                                                                                                                                             |
| :---------- | :-------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `condition` | `boolean`       | No       | a boolean value indicating whether to apply the provided tracing information to the desired content.                                                                    |
| `astNode`   | `T`             | No       | the AstNode corresponding to the appended content                                                                                                                       |
| `property`  | `Properties<T>` | Yes      | the value property name (string) corresponding to the appended content, if e.g. the content corresponds to some `string` or `number` property of `astNode`, is optional |
