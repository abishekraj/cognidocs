# NotebookDocumentFilter

A notebook document filter denotes a notebook document by different properties. The properties will be match against the notebook's URI (same as with documents)

## Definition
```typescript
{
    /** The type of the enclosing notebook. */
    notebookType: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`. */
    scheme?: string;
    /** A glob pattern. */
    pattern?: string;
} | {
    /** The type of the enclosing notebook. */
    notebookType?: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`.*/
    scheme: string;
    /** A glob pattern. */
    pattern?: string;
} | {
    /** The type of the enclosing notebook. */
    notebookType?: string;
    /** A Uri {@link Uri.scheme scheme}, like `file` or `untitled`. */
    scheme?: string;
    /** A glob pattern. */
    pattern: string;
}
```