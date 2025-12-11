# TransformPluginContext
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `debug` | `LoggingFunctionWithPosition` | No | - |
| `error` | `(error: RollupError \| string, pos?: number \| { column: number; line: number }) => never` | No | - |
| `getCombinedSourcemap` | `() => SourceMap` | No | - |
| `info` | `LoggingFunctionWithPosition` | No | - |
| `warn` | `LoggingFunctionWithPosition` | No | - |