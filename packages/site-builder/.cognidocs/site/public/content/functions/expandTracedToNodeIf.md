# expandTracedToNodeIf

**Return Type:** `(staticParts: TemplateStringsArray, ...substitutions: unknown[]) => CompositeGeneratorNode | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `condition` | `boolean` | No | a boolean value indicating whether to evaluate the provided template. |
| `astNode` | `T` | No | the AstNode corresponding to the appended content |
| `property` | `Properties<T>` | Yes | the value property name (string) corresponding to the appended content, if e.g. the content corresponds to some `string` or `number` property of `astNode`, is optional |