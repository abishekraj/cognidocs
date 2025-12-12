# DocumentDiagnosticParams

Parameters of the document diagnostic request.

## Definition

```typescript
WorkDoneProgressParams & PartialResultParams & {
    /**
     * The text document.
     */
    textDocument: TextDocumentIdentifier;
    /**
     * The additional identifier  provided during registration.
     */
    identifier?: string;
    /**
     * The result id of a previous response if provided.
     */
    previousResultId?: string;
}
```
