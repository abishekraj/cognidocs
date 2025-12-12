# NodePathResult

## Definition

```typescript
| (Extract<T, Node | null | undefined> extends never ? never : NodePath<Extract<T, Node | null | undefined>>)
    | (T extends Array<Node | null | undefined> ? Array<NodePath<T[number]>> : never)
```
