# Tag

Single tag.

## Definition
```typescript
{
    /**
     *   Name of tag, or `undefined` for fragment.
     *
     *   > 👉 **Note**: `null` is used in the AST for fragments, as it serializes in
     *   > JSON.
     */
    name: string | undefined;
    /**
     *   Attributes.
     */
    attributes: Array<MdxJsxAttribute | MdxJsxExpressionAttribute>;
    /**
     *   Whether the tag is closing (`</x>`).
     */
    close: boolean;
    /**
     *   Whether the tag is self-closing (`<x/>`).
     */
    selfClosing: boolean;
    /**
     *   Start point.
     */
    start: Token["start"];
    /**
     *   End point.
     */
    end: Token["start"];
}
```