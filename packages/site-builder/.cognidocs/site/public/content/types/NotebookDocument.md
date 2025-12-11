# NotebookDocument

A notebook document.

## Definition
```typescript
{
    /**
     * The notebook document's uri.
     */
    uri: URI;
    /**
     * The type of the notebook.
     */
    notebookType: string;
    /**
     * The version number of this document (it will increase after each
     * change, including undo/redo).
     */
    version: integer;
    /**
     * Additional metadata stored with the notebook
     * document.
     *
     * Note: should always be an object literal (e.g. LSPObject)
     */
    metadata?: LSPObject;
    /**
     * The cells of a notebook.
     */
    cells: NotebookCell[];
}
```