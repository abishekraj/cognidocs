# CustomPatternMatcherFunc

API #1 [Custom Token Patterns](http://chevrotain.io/docs/guide/custom_token_patterns.html).

## Definition
```typescript
(
  /**
   * The full input string.
   */
  text: string,
  /**
   * The offset at which to attempt a match
   */
  offset: number,
  /**
   * Previously scanned Tokens
   */
  tokens: IToken[],
  /**
   * Token Groups
   */
  groups: {
    [groupName: string]: IToken[];
  },
) => CustomPatternMatcherReturn | RegExpExecArray | null
```