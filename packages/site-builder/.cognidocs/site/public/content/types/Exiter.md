# Exiter

Like a tokenizer, but without `ok` or `nok`, and returning `undefined`. This is the final hook when a container must be closed.

## Definition
```typescript
(this: TokenizeContext, effects: Effects) => undefined
```