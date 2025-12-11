# SelectionOrTransition

Represents the union of the Selection and Transition types for any usages that operate on both. Typically used for functions which take in either a selection or transition and set or update attributes.

## Definition
```typescript
| Selection<GElement, Datum, PElement, PDatum>
    | Transition<GElement, Datum, PElement, PDatum>
```