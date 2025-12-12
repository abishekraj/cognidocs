# InlayHint

Inlay hint information.

## Definition

```typescript
{
    /**
     * The position of this hint.
     */
    position: Position;
    /**
     * The label of this hint. A human readable string or an array of
     * InlayHintLabelPart label parts.
     *
     * *Note* that neither the string nor the label part can be empty.
     */
    label: string | InlayHintLabelPart[];
    /**
     * The kind of this hint. Can be omitted in which case the client
     * should fall back to a reasonable default.
     */
    kind?: InlayHintKind;
    /**
     * Optional text edits that are performed when accepting this inlay hint.
     *
     * *Note* that edits are expected to change the document so that the inlay
     * hint (or its nearest variant) is now part of the document and the inlay
     * hint itself is now obsolete.
     */
    textEdits?: TextEdit[];
    /**
     * The tooltip text when you hover over this item.
     */
    tooltip?: string | MarkupContent;
    /**
     * Render padding before the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    paddingLeft?: boolean;
    /**
     * Render padding after the hint.
     *
     * Note: Padding should use the editor's background color, not the
     * background color of the hint itself. That means padding can be used
     * to visually align/separate an inlay hint.
     */
    paddingRight?: boolean;
    /**
     * A data entry field that is preserved on an inlay hint between
     * a `textDocument/inlayHint` and a `inlayHint/resolve` request.
     */
    data?: LSPAny;
}
```
