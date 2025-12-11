# SetArray

SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the index of the `key` in the backing array. This is designed to allow synchronizing a second array with the contents of the backing array, like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`, and there are never duplicates.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `_indexes` | `Record<T, number \| undefined>` | - |
| `array` | `readonly T[]` | - |
