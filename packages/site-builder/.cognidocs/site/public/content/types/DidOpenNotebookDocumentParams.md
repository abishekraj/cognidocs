# DidOpenNotebookDocumentParams

The params sent in an open notebook document notification.

## Definition
```typescript
{
    /**
     * The notebook document that got opened.
     */
    notebookDocument: NotebookDocument;
    /**
     * The text documents that represent the content
     * of a notebook cell.
     */
    cellTextDocuments: TextDocumentItem[];
}
```