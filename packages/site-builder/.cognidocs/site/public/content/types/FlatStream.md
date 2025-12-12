# FlatStream

## Definition

```typescript
{
    'done': Stream<T>,
    'recur': T extends Iterable<infer Content>
        ? FlatStream<Content, MinusOne<Depth>>
        : Stream<T>
}[Depth extends 0 ? 'done' : 'recur']
```
