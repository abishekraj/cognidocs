# NotebookCellTextDocumentFilter

A notebook cell text document filter denotes a cell text document by different properties.

## Definition
```typescript
{
    /**
     * A filter that matches against the notebook
     * containing the notebook cell. If a string
     * value is provided it matches against the
     * notebook type. '*' matches every notebook.
     */
    notebook: string | NotebookDocumentFilter;
    /**
     * A language id like `python`.
     *
     * Will be matched against the language id of the
     * notebook cell document. '*' matches every language.
     */
    language?: string;
}
```