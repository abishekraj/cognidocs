# NestedInternMap

Represents a nested/recursive InternMap type The first generic "TObject" refers to the type of the data object that is available in the accessor functions. The second generic "TReduce" refers to the type of the data available at the deepest level (the result data). The third generic "TKeys" refers to the type of the keys at each level of the nestes InternMap.

## Definition

```typescript
TKeys extends [infer TFirst, ...infer TRest]
    ? InternMap<TFirst, NestedInternMap<TObject, TReduce, TRest>>
    : TReduce
```
