# joinTracedToNodeIf

**Return Type:** `<E>(iterable: Iterable<E> | E[], toGenerated?: ((element: E, index: number, isLast: boolean) => Generated) | JoinOptions<E>, options?: JoinOptions<E>) => CompositeGeneratorNode | undefined`

## Parameters

| Name        | Type            | Optional | Description                                                                                                                                                             |
| :---------- | :-------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `condition` | `boolean`       | No       | a boolean value indicating whether to evaluate the provided iterable.                                                                                                   |
| `astNode`   | `T`             | No       | the AstNode corresponding to the appended content                                                                                                                       |
| `property`  | `Properties<T>` | Yes      | the value property name (string) corresponding to the appended content, if e.g. the content corresponds to some `string` or `number` property of `astNode`, is optional |
