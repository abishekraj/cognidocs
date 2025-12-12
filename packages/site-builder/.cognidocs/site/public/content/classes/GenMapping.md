# GenMapping

Provides the state to generate a sourcemap.

## Properties

| Name              | Type                          | Description |
| :---------------- | :---------------------------- | :---------- |
| `_names`          | `SetArray<string>`            | -           |
| `_sources`        | `SetArray<string>`            | -           |
| `_sourcesContent` | `(string \| null)[]`          | -           |
| `_mappings`       | `SourceMapSegment[][]`        | -           |
| `_ignoreList`     | `SetArray<number>`            | -           |
| `file`            | `string \| null \| undefined` | -           |
| `sourceRoot`      | `string \| null \| undefined` | -           |
