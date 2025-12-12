# MatchesOne

Check whether a node matches a primitive check in the type system.

## Definition

```typescript
(Check extends null | undefined ? Value : Value extends {
    type: Check;
} ? Value : Value extends Check ? Value : Check extends Function ? Predicate<Check, Value> extends Value ? Predicate<Check, Value> : never : never)
```
