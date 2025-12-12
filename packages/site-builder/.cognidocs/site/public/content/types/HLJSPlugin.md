# HLJSPlugin

## Definition

```typescript
{
        'after:highlight'?: (result: HighlightResult) => void,
        'before:highlight'?: (context: BeforeHighlightContext) => void,
        'after:highlightElement'?: (data: { el: Element, result: HighlightResult, text: string}) => void,
        'before:highlightElement'?: (data: { el: Element, language: string}) => void,
        // TODO: Old API, remove with v12
        'after:highlightBlock'?: (data: { block: Element, result: HighlightResult, text: string}) => void,
        'before:highlightBlock'?: (data: { block: Element, language: string}) => void,
    }
```
