# InlineValueParams

A parameter literal used in inline value requests.

## Definition
```typescript
WorkDoneProgressParams & {
    /**
     * The text document.
     */
    textDocument: TextDocumentIdentifier;
    /**
     * The document range for which inline values should be computed.
     */
    range: Range;
    /**
     * Additional information about the context in which inline values were
     * requested.
     */
    context: InlineValueContext;
}
```