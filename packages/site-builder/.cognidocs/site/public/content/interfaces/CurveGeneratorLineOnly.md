# CurveGeneratorLineOnly

A minimal interface for a curve generator which supports only the rendering of lines. Methods for related to the rendering of areas are not implemented in this minimal interface. While lines are defined as a sequence of two-dimensional [x, y] points, there remains the task of transforming this discrete representation into a continuous shape: i.e., how to interpolate between the points. A curve generator serves this purpose. Curves are typically not constructed or used directly, instead being passed to line.curve.
