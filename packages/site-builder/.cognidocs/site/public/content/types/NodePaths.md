# NodePaths

## Definition

```typescript
T extends readonly Node[]
    ? { -readonly [K in keyof T]: NodePath<Extract<T[K], Node>> }
    : T extends Node ? [NodePath<T>]
    : never
```
