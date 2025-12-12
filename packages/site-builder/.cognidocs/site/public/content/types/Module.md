# Module

## Definition

```typescript
{
    [K in keyof T]: Module<I, T[K]> | ((injector: I) => T[K])
}
```
