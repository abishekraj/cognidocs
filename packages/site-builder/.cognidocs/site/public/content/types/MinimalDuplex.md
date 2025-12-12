# MinimalDuplex

Duplex stream.

## Definition

```typescript
Omit<
  NodeJS.ReadableStream & NodeJS.WritableStream,
  'isPaused' | 'pause' | 'read' | 'resume' | 'setEncoding' | 'unpipe' | 'unshift' | 'wrap'
>;
```
