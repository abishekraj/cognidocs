# DidCloseNotebookDocumentParams

The params sent in a close notebook document notification.

## Definition

```typescript
{
    /**
     * The notebook document that got closed.
     */
    notebookDocument: NotebookDocumentIdentifier;
    /**
     * The text documents that represent the content
     * of a notebook cell that got closed.
     */
    cellTextDocuments: TextDocumentIdentifier[];
}
```
