# FontCalculator

JavaScript function that returns a `FontConfig`. By default, these return the appropriate `*FontSize`, `*FontFamily`, `*FontWeight` values. For example, the font calculator called `boundaryFont` might be defined as: ```javascript boundaryFont: function () { return { fontFamily: this.boundaryFontFamily, fontSize: this.boundaryFontSize, fontWeight: this.boundaryFontWeight, }; } ``` This interface was referenced by `MermaidConfig`'s JSON-Schema via the `definition` "FontCalculator".

## Definition
```typescript
() => Partial<FontConfig>
```