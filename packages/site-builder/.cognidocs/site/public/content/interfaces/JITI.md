# JITI
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `transform` | `(opts: TransformOptions) => string` | No | - |
| `register` | `() => () => void` | No | - |
| `evalModule` | `(source: string, options?: EvalModuleOptions) => unknown` | No | - |
| `import` | `(id: string, importOptions: JITIImportOptions) => Promise<unknown>` | No | - |