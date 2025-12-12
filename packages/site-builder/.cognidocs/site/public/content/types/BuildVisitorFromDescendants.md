# BuildVisitorFromDescendants

Build a typed `Visitor` function from a list of descendants and a test. It will infer which values are passed as `node` and which as `parent`.

## Definition

```typescript
BuildVisitorFromMatch<Matches<Descendant, Check>, Extract<Descendant, UnistParent>>;
```
