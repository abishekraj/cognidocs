# TypeHierarchyItem

## Definition

```typescript
{
    /**
     * The name of this item.
     */
    name: string;
    /**
     * The kind of this item.
     */
    kind: SymbolKind;
    /**
     * Tags for this item.
     */
    tags?: SymbolTag[];
    /**
     * More detail for this item, e.g. the signature of a function.
     */
    detail?: string;
    /**
     * The resource identifier of this item.
     */
    uri: DocumentUri;
    /**
     * The range enclosing this symbol not including leading/trailing whitespace
     * but everything else, e.g. comments and code.
     */
    range: Range;
    /**
     * The range that should be selected and revealed when this symbol is being
     * picked, e.g. the name of a function. Must be contained by the
     * {@link TypeHierarchyItem.range `range`}.
     */
    selectionRange: Range;
    /**
     * A data entry field that is preserved between a type hierarchy prepare and
     * supertypes or subtypes requests. It could also be used to identify the
     * type hierarchy in the server, helping improve the performance on
     * resolving supertypes and subtypes.
     */
    data?: LSPAny;
}
```
