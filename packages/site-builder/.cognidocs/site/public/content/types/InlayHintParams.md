# InlayHintParams

A parameter literal used in inlay hint requests.

## Definition

```typescript
WorkDoneProgressParams & {
    /**
     * The text document.
     */
    textDocument: TextDocumentIdentifier;
    /**
     * The document range for which inlay hints should be computed.
     */
    range: Range;
}
```
