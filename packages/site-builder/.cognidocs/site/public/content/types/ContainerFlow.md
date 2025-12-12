# ContainerFlow

Serialize the children of a parent that contains flow children. These children will typically be joined by blank lines. What they are joined by exactly is defined by `Join` functions.

## Definition

```typescript
(parent: FlowParents, info: TrackFields) => string;
```
