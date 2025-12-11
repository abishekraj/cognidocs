# InternalParent

Collect nodes that can be parents of `Child`.

## Definition
```typescript
(Node extends UnistParent ? Node extends {
    children: Array<infer Children>;
} ? Child extends Children ? Node : never : never : never)
```