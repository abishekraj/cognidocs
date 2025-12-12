# CoreOptions

## Definition

```typescript
{
    /**
     * Whether to only escape the given subset of characters.
     */
    subset?: ReadonlyArray<string>;
    /**
     * Whether to only escape possibly dangerous characters.
     * Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
     */
    escapeOnly?: boolean;
}
```
