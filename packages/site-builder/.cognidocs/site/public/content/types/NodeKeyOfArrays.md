# NodeKeyOfArrays

## Definition

```typescript
{
    [P in keyof T]-?: T[P] extends Array<Node | null | undefined> ? P : never;
}[keyof T]
```
