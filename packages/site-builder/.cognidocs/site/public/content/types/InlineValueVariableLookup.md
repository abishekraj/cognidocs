# InlineValueVariableLookup

Provide inline value through a variable lookup. If only a range is specified, the variable name will be extracted from the underlying document. An optional variable name can be used to override the extracted name.

## Definition

```typescript
{
    /**
     * The document range for which the inline value applies.
     * The range is used to extract the variable name from the underlying document.
     */
    range: Range;
    /**
     * If specified the name of the variable to look up.
     */
    variableName?: string;
    /**
     * How to perform the lookup.
     */
    caseSensitiveLookup: boolean;
}
```
