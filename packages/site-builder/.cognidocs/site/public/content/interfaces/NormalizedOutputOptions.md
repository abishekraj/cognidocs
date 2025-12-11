# NormalizedOutputOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `amd` | `NormalizedAmdOptions` | No | - |
| `assetFileNames` | `string \| ((chunkInfo: PreRenderedAsset) => string)` | No | - |
| `banner` | `AddonFunction` | No | - |
| `chunkFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string)` | No | - |
| `compact` | `boolean` | No | - |
| `dir` | `string \| undefined` | No | - |
| `dynamicImportInCjs` | `boolean` | No | - |
| `entryFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string)` | No | - |
| `esModule` | `boolean \| 'if-default-prop'` | No | - |
| `experimentalMinChunkSize` | `number` | No | - |
| `exports` | `'default' \| 'named' \| 'none' \| 'auto'` | No | - |
| `extend` | `boolean` | No | - |
| `externalImportAssertions` | `boolean` | No | - |
| `externalImportAttributes` | `boolean` | No | - |
| `externalLiveBindings` | `boolean` | No | - |
| `file` | `string \| undefined` | No | - |
| `footer` | `AddonFunction` | No | - |
| `format` | `InternalModuleFormat` | No | - |
| `freeze` | `boolean` | No | - |
| `generatedCode` | `NormalizedGeneratedCodeOptions` | No | - |
| `globals` | `GlobalsOption` | No | - |
| `hashCharacters` | `HashCharacters` | No | - |
| `hoistTransitiveImports` | `boolean` | No | - |
| `importAttributesKey` | `ImportAttributesKey` | No | - |
| `indent` | `true \| string` | No | - |
| `inlineDynamicImports` | `boolean` | No | - |
| `interop` | `GetInterop` | No | - |
| `intro` | `AddonFunction` | No | - |
| `manualChunks` | `ManualChunksOption` | No | - |
| `minifyInternalExports` | `boolean` | No | - |
| `name` | `string \| undefined` | No | - |
| `noConflict` | `boolean` | No | - |
| `onlyExplicitManualChunks` | `boolean` | No | - |
| `outro` | `AddonFunction` | No | - |
| `paths` | `OptionsPaths` | No | - |
| `plugins` | `OutputPlugin[]` | No | - |
| `preserveModules` | `boolean` | No | - |
| `preserveModulesRoot` | `string \| undefined` | No | - |
| `reexportProtoFromExternal` | `boolean` | No | - |
| `sanitizeFileName` | `(fileName: string) => string` | No | - |
| `sourcemap` | `boolean \| 'inline' \| 'hidden'` | No | - |
| `sourcemapBaseUrl` | `string \| undefined` | No | - |
| `sourcemapExcludeSources` | `boolean` | No | - |
| `sourcemapFile` | `string \| undefined` | No | - |
| `sourcemapFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string) \| undefined` | No | - |
| `sourcemapIgnoreList` | `SourcemapIgnoreListOption` | No | - |
| `sourcemapPathTransform` | `SourcemapPathTransformOption \| undefined` | No | - |
| `sourcemapDebugIds` | `boolean` | No | - |
| `strict` | `boolean` | No | - |
| `systemNullSetters` | `boolean` | No | - |
| `validate` | `boolean` | No | - |
| `virtualDirname` | `string` | No | - |