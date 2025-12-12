# BuildVisitorFromMatch

Build a typed `Visitor` function from a node and all possible parents. It will infer which values are passed as `node` and which as `parent`.

## Definition

```typescript
Visitor<Visited, Parent<Ancestor, Visited>>;
```
