# RollupBuild
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `cache` | `RollupCache \| undefined` | No | - |
| `close` | `() => Promise<void>` | No | - |
| `closed` | `boolean` | No | - |
| `generate` | `(outputOptions: OutputOptions) => Promise<RollupOutput>` | No | - |
| `getTimings` | `(() => SerializedTimings) \| undefined` | Yes | - |
| `watchFiles` | `string[]` | No | - |
| `write` | `(options: OutputOptions) => Promise<RollupOutput>` | No | - |