# OnEnterError

Handle the case where the `right` token is open, but it is closed (by the `left` token) or because we reached the end of the document.

## Definition
```typescript
(
  this: Omit<CompileContext, 'sliceSerialize'>,
  left: Token | undefined,
  right: Token
) => undefined
```