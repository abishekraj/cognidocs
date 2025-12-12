# BuildVisitor

Build a typed `Visitor` function from a tree and a test. It will infer which values are passed as `node` and which as `parents`.

## Definition

```typescript
Visitor<
  Matches<InclusiveDescendant<Tree>, Check>,
  Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>
>;
```
