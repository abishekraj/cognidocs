# Code

A character code. This is often the same as what `String#charCodeAt()` yields but micromark adds meaning to certain other values. `null` represents the end of the input stream (called eof). Negative integers are used instead of certain sequences of characters (such as line endings and tabs).

## Definition

```typescript
number | null;
```
