# GeoStream

A D3 geo stream. D3 transforms geometry using a sequence of function calls, rather than materializing intermediate representations, to minimize overhead. Streams must implement several methods to receive input geometry. Streams are inherently stateful; the meaning of a point depends on whether the point is inside of a line, and likewise a line is distinguished from a ring by a polygon. Despite the name “stream”, these method calls are currently synchronous.
