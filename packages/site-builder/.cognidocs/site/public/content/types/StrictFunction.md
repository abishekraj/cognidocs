# StrictFunction

## Definition

```typescript
(
  errorCode:
    | 'unknownSymbol'
    | 'unicodeTextInMathMode'
    | 'mathVsTextUnits'
    | 'commentAtEnd'
    | 'htmlExtension'
    | 'newLineInDisplayMode',
  errorMsg: string,
  token: Token
) => boolean | 'error' | 'warn' | 'ignore' | undefined;
```
