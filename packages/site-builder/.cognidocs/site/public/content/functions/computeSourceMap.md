# computeSourceMap

Generate a source map indicating that each line maps directly to the original line, with the tokens in their new positions.

**Return Type:** `RawSourceMap`

## Parameters

| Name                                             | Type                    | Optional | Description |
| :----------------------------------------------- | :---------------------- | :------- | :---------- |
| `{ code: generatedCode, mappings: rawMappings }` | `RootTransformerResult` | No       | -           |
| `filePath`                                       | `string`                | No       | -           |
| `options`                                        | `SourceMapOptions`      | No       | -           |
| `source`                                         | `string`                | No       | -           |
| `tokens`                                         | `Array<Token>`          | No       | -           |
