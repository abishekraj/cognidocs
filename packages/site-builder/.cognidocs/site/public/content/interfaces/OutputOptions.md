# OutputOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `amd` | `AmdOptions \| undefined` | Yes | - |
| `assetFileNames` | `string \| ((chunkInfo: PreRenderedAsset) => string) \| undefined` | Yes | - |
| `banner` | `string \| AddonFunction \| undefined` | Yes | - |
| `chunkFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string) \| undefined` | Yes | - |
| `compact` | `boolean \| undefined` | Yes | - |
| `dir` | `string \| undefined` | Yes | - |
| `dynamicImportInCjs` | `boolean \| undefined` | Yes | - |
| `entryFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string) \| undefined` | Yes | - |
| `esModule` | `boolean \| 'if-default-prop' \| undefined` | Yes | - |
| `experimentalMinChunkSize` | `number \| undefined` | Yes | - |
| `exports` | `'default' \| 'named' \| 'none' \| 'auto' \| undefined` | Yes | - |
| `extend` | `boolean \| undefined` | Yes | - |
| `externalImportAssertions` | `boolean \| undefined` | Yes | - |
| `externalImportAttributes` | `boolean \| undefined` | Yes | - |
| `externalLiveBindings` | `boolean \| undefined` | Yes | - |
| `file` | `string \| undefined` | Yes | - |
| `footer` | `string \| AddonFunction \| undefined` | Yes | - |
| `format` | `ModuleFormat \| undefined` | Yes | - |
| `freeze` | `boolean \| undefined` | Yes | - |
| `generatedCode` | `GeneratedCodePreset \| GeneratedCodeOptions \| undefined` | Yes | - |
| `globals` | `GlobalsOption \| undefined` | Yes | - |
| `hashCharacters` | `HashCharacters \| undefined` | Yes | - |
| `hoistTransitiveImports` | `boolean \| undefined` | Yes | - |
| `importAttributesKey` | `ImportAttributesKey \| undefined` | Yes | - |
| `indent` | `string \| boolean \| undefined` | Yes | - |
| `inlineDynamicImports` | `boolean \| undefined` | Yes | - |
| `interop` | `InteropType \| GetInterop \| undefined` | Yes | - |
| `intro` | `string \| AddonFunction \| undefined` | Yes | - |
| `manualChunks` | `ManualChunksOption \| undefined` | Yes | - |
| `minifyInternalExports` | `boolean \| undefined` | Yes | - |
| `name` | `string \| undefined` | Yes | - |
| `noConflict` | `boolean \| undefined` | Yes | - |
| `onlyExplicitManualChunks` | `boolean \| undefined` | Yes | - |
| `outro` | `string \| AddonFunction \| undefined` | Yes | - |
| `paths` | `OptionsPaths \| undefined` | Yes | - |
| `plugins` | `OutputPluginOption \| undefined` | Yes | - |
| `preserveModules` | `boolean \| undefined` | Yes | - |
| `preserveModulesRoot` | `string \| undefined` | Yes | - |
| `reexportProtoFromExternal` | `boolean \| undefined` | Yes | - |
| `sanitizeFileName` | `boolean \| ((fileName: string) => string) \| undefined` | Yes | - |
| `sourcemap` | `boolean \| 'inline' \| 'hidden' \| undefined` | Yes | - |
| `sourcemapBaseUrl` | `string \| undefined` | Yes | - |
| `sourcemapExcludeSources` | `boolean \| undefined` | Yes | - |
| `sourcemapFile` | `string \| undefined` | Yes | - |
| `sourcemapFileNames` | `string \| ((chunkInfo: PreRenderedChunk) => string) \| undefined` | Yes | - |
| `sourcemapIgnoreList` | `boolean \| SourcemapIgnoreListOption \| undefined` | Yes | - |
| `sourcemapPathTransform` | `SourcemapPathTransformOption \| undefined` | Yes | - |
| `sourcemapDebugIds` | `boolean \| undefined` | Yes | - |
| `strict` | `boolean \| undefined` | Yes | - |
| `systemNullSetters` | `boolean \| undefined` | Yes | - |
| `validate` | `boolean \| undefined` | Yes | - |
| `virtualDirname` | `string \| undefined` | Yes | - |