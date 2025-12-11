# Contours

A contour generator which computes contour polygons by applying marching squares to a rectangular array of numeric values. For each threshold value, the contour generator constructs a GeoJSON MultiPolygon geometry object representing the area where the input values are greater than or equal to the threshold value. The geometry is in planar coordinates, where ⟨i + 0.5, j + 0.5⟩ corresponds to element i + jn in the input values array.
