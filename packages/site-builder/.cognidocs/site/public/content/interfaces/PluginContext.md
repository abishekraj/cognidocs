# PluginContext

## Properties

| Name            | Type                                      | Optional | Description |
| :-------------- | :---------------------------------------- | :------- | :---------- |
| `addWatchFile`  | `(id: string) => void`                    | No       | -           |
| `cache`         | `PluginCache`                             | No       | -           |
| `debug`         | `LoggingFunction`                         | No       | -           |
| `emitFile`      | `EmitFile`                                | No       | -           |
| `error`         | `(error: RollupError \| string) => never` | No       | -           |
| `fs`            | `RollupFsModule`                          | No       | -           |
| `getFileName`   | `(fileReferenceId: string) => string`     | No       | -           |
| `getModuleIds`  | `() => IterableIterator<string>`          | No       | -           |
| `getModuleInfo` | `GetModuleInfo`                           | No       | -           |
| `getWatchFiles` | `() => string[]`                          | No       | -           |
| `info`          | `LoggingFunction`                         | No       | -           |
| `load`          | `(                                        |

    	options: { id: string; resolveDependencies?: boolean } & Partial<PartialNull<ModuleOptions>>
    ) => Promise<ModuleInfo>` | No | - |

| `parse` | `ParseAst` | No | - |
| `resolve` | `(
		source: string,
		importer?: string,
		options?: {
			attributes?: Record<string, string>;
			custom?: CustomPluginOptions;
			isEntry?: boolean;
			skipSelf?: boolean;
		}
	) => Promise<ResolvedId \| null>` | No | - |
| `setAssetSource` | `(assetReferenceId: string, source: string \| Uint8Array) => void` | No | - |
| `warn` | `LoggingFunction` | No | - |
