# CurveGenerator

A minimal interface for a curve generator which supports the rendering of lines and areas. While lines are defined as a sequence of two-dimensional [x, y] points, and areas are similarly defined by a topline and a baseline, there remains the task of transforming this discrete representation into a continuous shape: i.e., how to interpolate between the points. A curve generator serves this purpose. Curves are typically not constructed or used directly, instead being passed to line.curve and area.curve.
