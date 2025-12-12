# NormalizedInputOptions

## Properties

| Name                            | Type                                    | Optional | Description |
| :------------------------------ | :-------------------------------------- | :------- | :---------- |
| `cache`                         | `false \| undefined \| RollupCache`     | No       | -           |
| `context`                       | `string`                                | No       | -           |
| `experimentalCacheExpiry`       | `number`                                | No       | -           |
| `experimentalLogSideEffects`    | `boolean`                               | No       | -           |
| `external`                      | `IsExternal`                            | No       | -           |
| `fs`                            | `RollupFsModule`                        | No       | -           |
| `input`                         | `string[] \| Record<string, string>`    | No       | -           |
| `jsx`                           | `false \| NormalizedJsxOptions`         | No       | -           |
| `logLevel`                      | `LogLevelOption`                        | No       | -           |
| `makeAbsoluteExternalsRelative` | `boolean \| 'ifRelativeSource'`         | No       | -           |
| `maxParallelFileOps`            | `number`                                | No       | -           |
| `moduleContext`                 | `(id: string) => string`                | No       | -           |
| `onLog`                         | `LogHandler`                            | No       | -           |
| `perf`                          | `boolean`                               | No       | -           |
| `plugins`                       | `Plugin[]`                              | No       | -           |
| `preserveEntrySignatures`       | `PreserveEntrySignaturesOption`         | No       | -           |
| `preserveSymlinks`              | `boolean`                               | No       | -           |
| `shimMissingExports`            | `boolean`                               | No       | -           |
| `strictDeprecations`            | `boolean`                               | No       | -           |
| `treeshake`                     | `false \| NormalizedTreeshakingOptions` | No       | -           |
