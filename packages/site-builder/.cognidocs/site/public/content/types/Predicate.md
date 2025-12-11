# Predicate

Get the value of a type guard `Fn`.

## Definition
```typescript
(Fn extends (value: any) => value is infer Thing ? Thing : Fallback)
```