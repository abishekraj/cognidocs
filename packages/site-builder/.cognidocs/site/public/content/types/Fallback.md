# Fallback
## Definition
```typescript
{ [P in keyof T]: T[P] | readonly NonNullable<T[P]>[] }
```