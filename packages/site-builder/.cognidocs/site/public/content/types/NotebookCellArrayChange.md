# NotebookCellArrayChange

A change describing how to move a `NotebookCell` array from state S to S'.

## Definition
```typescript
{
    /**
     * The start oftest of the cell that changed.
     */
    start: uinteger;
    /**
     * The deleted cells
     */
    deleteCount: uinteger;
    /**
     * The new cells, if any
     */
    cells?: NotebookCell[];
}
```