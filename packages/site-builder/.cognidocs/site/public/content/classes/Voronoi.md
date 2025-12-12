# Voronoi

Voronoi regions

## Properties

| Name            | Type           | Description |
| :-------------- | :------------- | :---------- |
| `delaunay`      | `Delaunay<P>`  | -           |
| `circumcenters` | `Float64Array` | -           |
| `vectors`       | `Float64Array` | -           |
| `xmin`          | `number`       | -           |
| `ymin`          | `number`       | -           |
| `xmax`          | `number`       | -           |
| `ymax`          | `number`       | -           |

## Methods

### contains

Returns true if the cell with the specified index i contains the specified point ⟨x, y⟩. (This method is not affected by the associated Voronoi diagram’s viewport bounds.)

**Return:** `boolean`

### neighbors

Returns an iterable over the indexes of the cells that share a common edge with the specified cell i. Voronoi neighbors are always neighbors on the Delaunay graph, but the converse is false when the common edge has been clipped out by the Voronoi diagram’s viewport.

**Return:** `Iterable<number>`

### render

Renders the mesh of Voronoi cells to an SVG path string.

**Return:** `string`

### render

Renders the mesh of Voronoi cells to the specified context. The specified context must implement the context.moveTo and context.lineTo methods from the CanvasPathMethods API.

**Return:** `void`

### renderBounds

Renders the viewport extent to an SVG path string.

**Return:** `string`

### renderBounds

Renders the viewport extent to the specified context. The specified context must implement the context.rect method from the CanvasPathMethods API. Equivalent to context.rect(voronoi.xmin, voronoi.ymin, voronoi.xmax - voronoi.xmin, voronoi.ymax - voronoi.ymin).

**Return:** `void`

### renderCell

Renders the cell with the specified index i to an SVG path string.

**Return:** `string`

### renderCell

Renders the cell with the specified index i to the specified context. The specified context must implement the context.moveTo, context.lineTo, and context.closePath methods from the CanvasPathMethods API.

**Return:** `void`

### cellPolygons

Returns an iterable over the non-empty polygons for each cell, with the cell index as property.

**Return:** `IterableIterator<Delaunay.Polygon & { index: number }>`

### cellPolygon

Returns the convex, closed polygon [[x0, y0], [x1, y1], ..., [x0, y0]] representing the cell for the specified point i.

**Return:** `Delaunay.Polygon`

### update

Updates the Voronoi diagram and underlying triangulation after the points have been modified in-place — useful for Lloyd’s relaxation.

**Return:** `this`
