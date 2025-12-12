# OnExitError

Handle the case where the `right` token is open but it is closed by exiting the `left` token.

## Definition

```typescript
(this: Omit<CompileContext, 'sliceSerialize'>, left: Token, right: Token) => undefined;
```
