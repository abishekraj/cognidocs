# InlineValueEvaluatableExpression

Provide an inline value through an expression evaluation. If only a range is specified, the expression will be extracted from the underlying document. An optional expression can be used to override the extracted expression.

## Definition

```typescript
{
    /**
     * The document range for which the inline value applies.
     * The range is used to extract the evaluatable expression from the underlying document.
     */
    range: Range;
    /**
     * If specified the expression overrides the extracted expression.
     */
    expression?: string;
}
```
