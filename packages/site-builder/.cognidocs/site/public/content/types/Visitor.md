# Visitor

Handle a node (matching `test`, if given). Visitors are free to transform `node`. They can also transform the parent of node (the last of `ancestors`). Replacing `node` itself, if `SKIP` is not returned, still causes its descendants to be walked (which is a bug). When adding or removing previous siblings of `node` (or next siblings, in case of reverse), the `Visitor` should return a new `Index` to specify the sibling to traverse after `node` is traversed. Adding or removing next siblings of `node` (or previous siblings, in case of reverse) is handled as expected without needing to return a new `Index`. Removing the children property of an ancestor still results in them being traversed.

## Definition

```typescript
(node: Visited, ancestors: Array<VisitedParents>) => VisitorResult;
```
