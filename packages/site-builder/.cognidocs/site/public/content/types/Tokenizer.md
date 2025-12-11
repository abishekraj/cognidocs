# Tokenizer

A tokenize function sets up a state machine to handle character codes streaming in.

## Definition
```typescript
(
  this: TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State
) => State
```