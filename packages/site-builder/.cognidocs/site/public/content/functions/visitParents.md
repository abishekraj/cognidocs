# visitParents

Visit nodes, with ancestral information. This algorithm performs *depth-first* *tree traversal* in *preorder* (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**). You can choose for which nodes `visitor` is called by passing a `test`. For complex tests, you should test yourself in `visitor`, as it will be faster and will have improved type information. Walking the tree is an intensive task. Make use of the return values of the visitor when possible. Instead of walking a tree multiple times, walk it once, use `unist-util-is` to check if a node matches, and then perform different operations. You can change the tree. See `Visitor` for more info.


**Return Type:** `undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tree` | `Tree` | No | Tree to traverse. |
| `check` | `Check` | No | - |
| `visitor` | `BuildVisitor<Tree, Check>` | No | @param {boolean | null | undefined} [reverse] |
| `reverse` | `boolean \| null \| undefined` | Yes | - |