# geoAlbersUsa

A U.S.-centric composite projection of three d3.geoConicEqualArea projections: d3.geoAlbers is used for the lower forty-eight states, and separate conic equal-area projections are used for Alaska and Hawaii. Note that the scale for Alaska is diminished: it is projected at 0.35× its true relative area. Composite consist of several projections that are composed into a single display. The constituent projections have fixed clip, center and rotation, and thus composite projections do not support projection.center, projection.rotate, projection.clipAngle, or projection.clipExtent.

**Return Type:** `GeoProjection`
