# CurveBundleFactory

A curve factory for straightened cubic basis spline generators. The curve generators produce a straightened cubic basis spline using the specified control points, with the spline straightened according to the curve’s beta, which defaults to 0.85. This curve is typically used in hierarchical edge bundling to disambiguate connections, as proposed by Danny Holten in Hierarchical Edge Bundles: Visualization of Adjacency Relations in Hierarchical Data. This curve does not implement curve.areaStart and curve.areaEnd; it is intended to work with d3.line, not d3.area.
