# toSequenceExpression

**Return Type:** `SequenceExpression | undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `nodes` | `ReadonlyArray<Node>` | No | - |
| `scope` | `{ push(value: { id: LVal; kind: 'var'; init?: Expression}): void; buildUndefinedNode(): Node }` | No | - |