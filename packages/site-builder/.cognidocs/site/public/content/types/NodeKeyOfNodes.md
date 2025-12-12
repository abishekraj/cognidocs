# NodeKeyOfNodes

## Definition

```typescript
{
    [P in keyof T]-?: T[P] extends Node | null | undefined ? P : never;
}[keyof T]
```
