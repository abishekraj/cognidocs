# CJSImportTransformer

Class for editing import statements when we are transforming to commonjs.

**Extends:** `Transformer`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `rootTransformer` | `RootTransformer` | - |
| `tokens` | `TokenProcessor` | - |
| `importProcessor` | `CJSImportProcessor` | - |
| `nameManager` | `NameManager` | - |
| `helperManager` | `HelperManager` | - |
| `reactHotLoaderTransformer` | `ReactHotLoaderTransformer \| null` | - |
| `enableLegacyBabel5ModuleInterop` | `boolean` | - |
| `enableLegacyTypeScriptModuleInterop` | `boolean` | - |
| `isTypeScriptTransformEnabled` | `boolean` | - |
| `isFlowTransformEnabled` | `boolean` | - |
| `preserveDynamicImport` | `boolean` | - |
| `keepUnusedImports` | `boolean` | - |
| `hadExport` | `any` | - |
| `hadNamedExport` | `any` | - |
| `hadDefaultExport` | `any` | - |
| `declarationInfo` | `any` | - |
| `processImportEquals` | `any` | - |
| `processImport` | `any` | - |
| `removeImportAndDetectIfShouldElide` | `any` | - |
| `removeRemainingImport` | `any` | - |
| `processIdentifier` | `any` | - |
| `processAssignment` | `any` | - |
| `processComplexAssignment` | `any` | - |
| `processPreIncDec` | `any` | - |
| `processPostIncDec` | `any` | - |
| `processExportDefault` | `any` | - |
| `copyDecorators` | `any` | - |
| `processExportVar` | `any` | - |
| `isSimpleExportVar` | `any` | - |
| `processSimpleExportVar` | `any` | - |
| `processComplexExportVar` | `any` | - |
| `processExportFunction` | `any` | - |
| `processNamedFunction` | `any` | - |
| `processExportClass` | `any` | - |
| `processExportBindings` | `any` | - |
| `processExportStar` | `any` | - |
| `shouldElideExportedIdentifier` | `any` | - |

## Methods
### getPrefixCode
**Return:** `string`

### getSuffixCode
**Return:** `string`

### process
**Return:** `boolean`

### processObjectShorthand
**Return:** `boolean`

### processExport
**Return:** `boolean`
