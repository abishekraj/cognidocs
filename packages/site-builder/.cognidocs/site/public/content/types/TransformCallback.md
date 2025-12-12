# TransformCallback

Callback passed to transforms. If the signature of a `transformer` accepts a third argument, the transformer may perform asynchronous operations, and must call it.

## Definition

```typescript
(error?: Error | undefined, tree?: Output | undefined, file?: VFile | undefined) => undefined;
```
