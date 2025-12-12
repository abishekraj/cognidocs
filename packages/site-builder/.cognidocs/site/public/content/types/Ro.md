# Ro

## Definition

```typescript
T extends Array<infer V>
    ? V[] | Readonly<V[]> | RoArray<V> | Readonly<RoArray<V>>
    : T extends object
      ? T | Readonly<T> | RoObject<T> | Readonly<RoObject<T>>
      : T
```
