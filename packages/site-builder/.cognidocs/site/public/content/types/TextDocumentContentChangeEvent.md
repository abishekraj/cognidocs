# TextDocumentContentChangeEvent

An event describing a change to a text document. If only a text is provided it is considered to be the full content of the document.

## Definition

```typescript
{
    /**
     * The range of the document that changed.
     */
    range: Range;
    /**
     * The optional length of the range that got replaced.
     *
     * @deprecated use range instead.
     */
    rangeLength?: uinteger;
    /**
     * The new text for the provided range.
     */
    text: string;
} | {
    /**
     * The new text of the whole document.
     */
    text: string;
}
```
