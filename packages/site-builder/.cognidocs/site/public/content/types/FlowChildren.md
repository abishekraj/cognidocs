# FlowChildren

Children of flow nodes.

## Definition
```typescript
FlowParents extends {
  children: Array<infer T>
}
  ? T
  : never
```