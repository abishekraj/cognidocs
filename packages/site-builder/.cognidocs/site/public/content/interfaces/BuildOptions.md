# BuildOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `bundle` | `boolean` | Yes | - |
| `splitting` | `boolean` | Yes | - |
| `preserveSymlinks` | `boolean` | Yes | - |
| `outfile` | `string` | Yes | - |
| `metafile` | `boolean` | Yes | - |
| `outdir` | `string` | Yes | - |
| `outbase` | `string` | Yes | - |
| `external` | `string[]` | Yes | - |
| `packages` | `'external'` | Yes | - |
| `alias` | `Record<string, string>` | Yes | - |
| `loader` | `{ [ext: string]: Loader }` | Yes | - |
| `resolveExtensions` | `string[]` | Yes | - |
| `mainFields` | `string[]` | Yes | - |
| `conditions` | `string[]` | Yes | - |
| `write` | `boolean` | Yes | - |
| `allowOverwrite` | `boolean` | Yes | - |
| `tsconfig` | `string` | Yes | - |
| `outExtension` | `{ [ext: string]: string }` | Yes | - |
| `publicPath` | `string` | Yes | - |
| `entryNames` | `string` | Yes | - |
| `chunkNames` | `string` | Yes | - |
| `assetNames` | `string` | Yes | - |
| `inject` | `string[]` | Yes | - |
| `banner` | `{ [type: string]: string }` | Yes | - |
| `footer` | `{ [type: string]: string }` | Yes | - |
| `entryPoints` | `string[] \| Record<string, string> \| { in: string, out: string }[]` | Yes | - |
| `stdin` | `StdinOptions` | Yes | - |
| `plugins` | `Plugin[]` | Yes | - |
| `absWorkingDir` | `string` | Yes | - |
| `nodePaths` | `string[]` | Yes | - |