# State

The main unit in the state machine: a function that gets a character code and has certain effects. A state function should return another function: the next state-as-a-function to go to. But there is one case where they return `undefined`: for the eof character code (at the end of a value). The reason being: well, there isn’t any state that makes sense, so `undefined` works well. Practically that has also helped: if for some reason it was a mistake, then an exception is throw because there is no next function, meaning it surfaces early.

## Definition
```typescript
(code: Code) => State | undefined
```