# NotebookCell

A notebook cell. A cell's document URI must be unique across ALL notebook cells and can therefore be used to uniquely identify a notebook cell or the cell's text document.

## Definition
```typescript
{
    /**
     * The cell's kind
     */
    kind: NotebookCellKind;
    /**
     * The URI of the cell's text document
     * content.
     */
    document: DocumentUri;
    /**
     * Additional metadata stored with the cell.
     *
     * Note: should always be an object literal (e.g. LSPObject)
     */
    metadata?: LSPObject;
    /**
     * Additional execution summary information
     * if supported by the client.
     */
    executionSummary?: ExecutionSummary;
}
```