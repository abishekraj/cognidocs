# MaybePromise

Can be converted back to `T` by awaiting/`Awaited<T>`. This is useful for function types that may be either synchronous or asynchronous.

## Definition
```typescript
T | Promise<T>
```