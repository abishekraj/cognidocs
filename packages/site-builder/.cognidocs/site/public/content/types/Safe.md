# Safe

Make a string safe for embedding in markdown constructs. In markdown, almost all punctuation characters can, in certain cases, result in something. Whether they do is highly subjective to where they happen and in what they happen. To solve this, `mdast-util-to-markdown` tracks: _ Characters before and after something; _ What “constructs” we are in. This information is then used by this function to escape or encode special characters.

## Definition

```typescript
(input: string | null | undefined, config: SafeConfig) => string;
```
