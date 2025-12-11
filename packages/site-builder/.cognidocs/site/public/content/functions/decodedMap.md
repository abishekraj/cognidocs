# decodedMap

Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects a sourcemap, or to JSON.stringify.


**Return Type:** `Omit<DecodedSourceMap, 'mappings'> & { mappings: readonly SourceMapSegment[][] }`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `map` | `TraceMap` | No | - |