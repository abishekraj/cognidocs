# InlineCompletionParams

A parameter literal used in inline completion requests.

## Definition

```typescript
WorkDoneProgressParams & TextDocumentPositionParams & {
    /**
     * Additional information about the context in which inline completions were
     * requested.
     */
    context: InlineCompletionContext;
}
```
