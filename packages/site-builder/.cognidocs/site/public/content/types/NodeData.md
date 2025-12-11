# NodeData

Util for extracting type of {@link Node.data}

## Definition
```typescript
TNode extends Node<infer TData> ? TData : never
```