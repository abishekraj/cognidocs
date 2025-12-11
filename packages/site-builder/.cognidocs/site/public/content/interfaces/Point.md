# Point

A location in the document (`line`/`column`/`offset`) and chunk (`_index`, `_bufferIndex`). `_bufferIndex` is `-1` when `_index` points to a code chunk and it’s a non-negative integer when pointing to a string chunk. The interface for the location in the document comes from unist `Point`: <https://github.com/syntax-tree/unist#point>

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `_bufferIndex` | `number` | No | - |
| `_index` | `number` | No | - |
| `column` | `number` | No | - |
| `line` | `number` | No | - |
| `offset` | `number` | No | - |