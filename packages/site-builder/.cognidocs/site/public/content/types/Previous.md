# Previous

Guard whether `code` can come before the construct. In certain cases a construct can hook into many potential start characters. Instead of setting up an attempt to parse that construct for most characters, this is a speedy way to reduce that.

## Definition
```typescript
(this: TokenizeContext, code: Code) => boolean
```