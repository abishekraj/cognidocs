# GeoRawProjection

Raw projections are point transformation functions that are used to implement custom projections; they typically passed to d3.geoProjection or d3.geoProjectionMutator. They are exposed here to facilitate the derivation of related projections. Raw projections take spherical coordinates [lambda, phi] in radians (not degrees!) and return a point [x, y], typically in the unit square centered around the origin.
