# PhrasingParents

Parent of phrasing nodes.

## Definition
```typescript
Parents extends {
  children: Array<infer T>
}
  ? PhrasingContent extends T
    ? Parents
    : never
  : never
```