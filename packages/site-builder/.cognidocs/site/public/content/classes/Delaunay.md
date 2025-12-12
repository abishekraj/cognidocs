# Delaunay

Delaunay triangulation

## Properties

| Name        | Type                | Description |
| :---------- | :------------------ | :---------- |
| `points`    | `ArrayLike<number>` | -           |
| `halfedges` | `Int32Array`        | -           |
| `hull`      | `Uint32Array`       | -           |
| `triangles` | `Uint32Array`       | -           |
| `inedges`   | `Int32Array`        | -           |

## Methods

### from

Returns the Delaunay triangulation for the given array or iterable of points where each point is an array in the form: [x, y].

**Return:** `Delaunay<Delaunay.Point>`

### from

Returns the Delaunay triangulation for the given array or iterable of points. Otherwise, the getX and getY functions are invoked for each point in order, and must return the respective x- and y-coordinate for each point. If that is specified, the functions getX and getY are invoked with that as this. (See Array.from for reference.)

**Return:** `Delaunay<P>`

### find

Returns the index of the input point that is closest to the specified point ⟨x, y⟩. The search is started at the specified point i. If i is not specified, it defaults to zero.

**Return:** `number`

### neighbors

Returns an iterable over the indexes of the neighboring points to the specified point i. The iterable is empty if i is a coincident point.

**Return:** `IterableIterator<number>`

### render

Renders the edges of the Delaunay triangulation to an SVG path string.

**Return:** `string`

### render

Renders the edges of the Delaunay triangulation to the specified context. The specified context must implement the context.moveTo and context.lineTo methods from the CanvasPathMethods API.

**Return:** `void`

### renderHull

Renders the convex hull of the Delaunay triangulation to an SVG path string.

**Return:** `string`

### renderHull

Renders the convex hull of the Delaunay triangulation to the specified context. The specified context must implement the context.moveTo and context.lineTo methods from the CanvasPathMethods API.

**Return:** `void`

### renderTriangle

Renders triangle i of the Delaunay triangulation to an SVG path string.

**Return:** `string`

### renderTriangle

Renders triangle i of the Delaunay triangulation to the specified context. The specified context must implement the context.moveTo, context.lineTo and context.closePath methods from the CanvasPathMethods API.

**Return:** `void`

### renderPoints

Renders the input points of the Delaunay triangulation to an SVG path string as circles with radius 2.

**Return:** `string`

### renderPoints

Renders the input points of the Delaunay triangulation to an SVG path string as circles with the specified radius.

**Return:** `string`

### renderPoints

Renders the input points of the Delaunay triangulation to the specified context as circles with the specified radius. If radius is not specified, it defaults to 2. The specified context must implement the context.moveTo and context.arc methods from the CanvasPathMethods API.

**Return:** `void`

### hullPolygon

Returns the closed polygon [[x0, y0], [x1, y1], ..., [x0, y0]] representing the convex hull.

**Return:** `Delaunay.Polygon`

### trianglePolygon

Returns the closed polygon [[x0, y0], [x1, y1], [x2, y2], [x0, y0]] representing the triangle i.

**Return:** `Delaunay.Triangle`

### trianglePolygons

Returns an iterable over the polygons for each triangle, in order.

**Return:** `IterableIterator<Delaunay.Triangle>`

### update

Updates the triangulation after the points have been modified in-place.

**Return:** `this`

### voronoi

Returns the Voronoi diagram for the associated points. When rendering, the diagram will be clipped to the specified bounds = [xmin, ymin, xmax, ymax]. If bounds is not specified, it defaults to [0, 0, 960, 500]. See To Infinity and Back Again for an interactive explanation of Voronoi cell clipping.

**Return:** `Voronoi<P>`
