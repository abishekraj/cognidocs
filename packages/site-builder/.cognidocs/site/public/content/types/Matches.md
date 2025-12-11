# Matches

Check whether a node matches a check in the type system.

## Definition
```typescript
(Check extends ReadonlyArray<infer T> ? MatchesOne<Value, T> : Check extends Array<infer T> ? MatchesOne<Value, T> : MatchesOne<Value, Check>)
```