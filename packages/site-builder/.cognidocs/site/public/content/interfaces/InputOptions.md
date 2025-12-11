# InputOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `cache` | `boolean \| RollupCache \| undefined` | Yes | - |
| `context` | `string \| undefined` | Yes | - |
| `experimentalCacheExpiry` | `number \| undefined` | Yes | - |
| `experimentalLogSideEffects` | `boolean \| undefined` | Yes | - |
| `external` | `ExternalOption \| undefined` | Yes | - |
| `fs` | `RollupFsModule \| undefined` | Yes | - |
| `input` | `InputOption \| undefined` | Yes | - |
| `jsx` | `false \| JsxPreset \| JsxOptions \| undefined` | Yes | - |
| `logLevel` | `LogLevelOption \| undefined` | Yes | - |
| `makeAbsoluteExternalsRelative` | `boolean \| 'ifRelativeSource' \| undefined` | Yes | - |
| `maxParallelFileOps` | `number \| undefined` | Yes | - |
| `moduleContext` | `((id: string) => string \| NullValue) \| Record<string, string> \| undefined` | Yes | - |
| `onLog` | `LogHandlerWithDefault \| undefined` | Yes | - |
| `onwarn` | `WarningHandlerWithDefault \| undefined` | Yes | - |
| `perf` | `boolean \| undefined` | Yes | - |
| `plugins` | `InputPluginOption \| undefined` | Yes | - |
| `preserveEntrySignatures` | `PreserveEntrySignaturesOption \| undefined` | Yes | - |
| `preserveSymlinks` | `boolean \| undefined` | Yes | - |
| `shimMissingExports` | `boolean \| undefined` | Yes | - |
| `strictDeprecations` | `boolean \| undefined` | Yes | - |
| `treeshake` | `boolean \| TreeshakingPreset \| TreeshakingOptions \| undefined` | Yes | - |
| `watch` | `WatcherOptions \| false \| undefined` | Yes | - |