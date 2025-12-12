# InternalAncestor

Collect nodes in `Tree` that can be ancestors of `Child`.

## Definition

```typescript
(Depth extends Max ? never : InternalParent<Node, Child> | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>)
```
