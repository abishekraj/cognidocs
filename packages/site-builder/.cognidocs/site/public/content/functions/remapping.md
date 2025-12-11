# remapping

Traces through all the mappings in the root sourcemap, through the sources (and their sourcemaps), all the way back to the original source location. `loader` will be called every time we encounter a source file. If it returns a sourcemap, we will recurse into that sourcemap to continue the trace. If it returns a falsey value, that source file is treated as an original, unmodified source file. Pass `excludeContent` to exclude any self-containing source file content from the output sourcemap. Pass `decodedMappings` to receive a SourceMap with decoded (instead of VLQ encoded) mappings.


**Return Type:** `SourceMap`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `input` | `SourceMapInput \| SourceMapInput[]` | No | - |
| `loader` | `SourceMapLoader` | No | - |
| `options` | `boolean \| Options` | Yes | - |