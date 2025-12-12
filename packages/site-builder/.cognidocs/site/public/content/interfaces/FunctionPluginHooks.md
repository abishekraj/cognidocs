# FunctionPluginHooks

## Properties

| Name               | Type                                                             | Optional | Description |
| :----------------- | :--------------------------------------------------------------- | :------- | :---------- |
| `augmentChunkHash` | `(this: PluginContext, chunk: RenderedChunk) => string \| void`  | No       | -           |
| `buildEnd`         | `(this: PluginContext, error?: Error) => void`                   | No       | -           |
| `buildStart`       | `(this: PluginContext, options: NormalizedInputOptions) => void` | No       | -           |
| `closeBundle`      | `(this: PluginContext, error?: Error) => void`                   | No       | -           |
| `closeWatcher`     | `(this: PluginContext) => void`                                  | No       | -           |
| `generateBundle`   | `(                                                               |

    	this: PluginContext,
    	options: NormalizedOutputOptions,
    	bundle: OutputBundle,
    	isWrite: boolean
    ) => void` | No | - |

| `load` | `LoadHook` | No | - |
| `moduleParsed` | `ModuleParsedHook` | No | - |
| `onLog` | `(this: MinimalPluginContext, level: LogLevel, log: RollupLog) => boolean \| NullValue` | No | - |
| `options` | `(this: MinimalPluginContext, options: InputOptions) => InputOptions \| NullValue` | No | - |
| `outputOptions` | `(this: PluginContext, options: OutputOptions) => OutputOptions \| NullValue` | No | - |
| `renderChunk` | `RenderChunkHook` | No | - |
| `renderDynamicImport` | `(
		this: PluginContext,
		options: {
			customResolution: string \| null;
			format: InternalModuleFormat;
			moduleId: string;
			targetModuleId: string \| null;
			chunk: PreRenderedChunkWithFileName;
			targetChunk: PreRenderedChunkWithFileName \| null;
			getTargetChunkImports: () => DynamicImportTargetChunk[] \| null;
		}
	) => { left: string; right: string } \| NullValue` | No | - |
| `renderError` | `(this: PluginContext, error?: Error) => void` | No | - |
| `renderStart` | `(
		this: PluginContext,
		outputOptions: NormalizedOutputOptions,
		inputOptions: NormalizedInputOptions
	) => void` | No | - |
| `resolveDynamicImport` | `ResolveDynamicImportHook` | No | - |
| `resolveFileUrl` | `ResolveFileUrlHook` | No | - |
| `resolveId` | `ResolveIdHook` | No | - |
| `resolveImportMeta` | `ResolveImportMetaHook` | No | - |
| `shouldTransformCachedModule` | `ShouldTransformCachedModuleHook` | No | - |
| `transform` | `TransformHook` | No | - |
| `watchChange` | `WatchChangeHook` | No | - |
| `writeBundle` | `(
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle
	) => void` | No | - |
