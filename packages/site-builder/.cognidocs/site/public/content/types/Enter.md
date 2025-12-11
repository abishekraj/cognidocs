# Enter

Open a token.

## Definition
```typescript
(
  type: TokenType,
  fields?: Omit<Partial<Token>, 'type'> | undefined
) => Token
```