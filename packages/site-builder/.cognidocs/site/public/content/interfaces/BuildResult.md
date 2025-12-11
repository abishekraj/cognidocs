# BuildResult
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `errors` | `Message[]` | No | - |
| `warnings` | `Message[]` | No | - |
| `outputFiles` | `OutputFile[] \| (ProvidedOptions['write'] extends false ? never : undefined)` | No | - |
| `metafile` | `Metafile \| (ProvidedOptions['metafile'] extends true ? never : undefined)` | No | - |
| `mangleCache` | `Record<string, string \| false> \| (ProvidedOptions['mangleCache'] extends Object ? never : undefined)` | No | - |