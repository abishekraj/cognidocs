# Event

The start or end of a token amongst other events. Tokens can “contain” other tokens, even though they are stored in a flat list, through `enter`ing before them, and `exit`ing after them.

## Definition
```typescript
['enter' | 'exit', Token, TokenizeContext]
```