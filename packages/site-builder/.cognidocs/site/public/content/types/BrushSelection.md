# BrushSelection

Type alias for a BrushSelection. For a two-dimensional brush, it must be defined as [[x0, y0], [x1, y1]], where x0 is the minimum x-value, y0 is the minimum y-value, x1 is the maximum x-value, and y1 is the maximum y-value. For an x-brush, it must be defined as [x0, x1]; for a y-brush, it must be defined as [y0, y1].

## Definition
```typescript
[[number, number], [number, number]] | [number, number]
```