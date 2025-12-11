# NotebookDocumentChangeEvent
## Definition
```typescript
{
    /**
     * The notebook document that changed.
     */
    notebookDocument: NotebookDocument;
    /**
     * The meta data change if any.
     *
     * Note: old and new should always be an object literal (e.g. LSPObject)
     */
    metadata?: {
        old: LSPObject | undefined;
        new: LSPObject | undefined;
    };
    /**
     * The cell changes if any.
     */
    cells?: {
        /**
         * The cells that got added.
         */
        added: NotebookCell[];
        /**
         * The cells that got removed.
         */
        removed: NotebookCell[];
        /**
         * The cells that changed.
         */
        changed: {
            /**
             * The cell data has changed, excluding its
             * text content which is reported via
             * `textContentChanged`.
             */
            data: {
                old: NotebookCell;
                new: NotebookCell;
            }[];
            /**
             * The text content of a cell has changed.
             * The actual text is available via the `Notebooks`
             * text document manager.
             */
            textContent: NotebookCell[];
        };
    };
}
```