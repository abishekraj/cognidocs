# buildSourceMapTree

Recursively builds a tree structure out of sourcemap files, with each node being either an `OriginalSource` "leaf" or a `SourceMapTree` composed of `OriginalSource`s and `SourceMapTree`s. Every sourcemap is composed of a collection of source files and mappings into locations of those source files. When we generate a `SourceMapTree` for the sourcemap, we attempt to load each source file's own sourcemap. If it does not have an associated sourcemap, it is considered an original, unmodified source file.


**Return Type:** `MapSourceType`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `input` | `SourceMapInput \| SourceMapInput[]` | No | - |
| `loader` | `SourceMapLoader` | No | - |