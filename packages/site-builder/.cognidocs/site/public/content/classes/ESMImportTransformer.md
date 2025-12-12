# ESMImportTransformer

Class for editing import statements when we are keeping the code as ESM. We still need to remove type-only imports in TypeScript and Flow.

**Extends:** `Transformer`

## Properties

| Name                                   | Type                                | Description |
| :------------------------------------- | :---------------------------------- | :---------- |
| `tokens`                               | `TokenProcessor`                    | -           |
| `nameManager`                          | `NameManager`                       | -           |
| `helperManager`                        | `HelperManager`                     | -           |
| `reactHotLoaderTransformer`            | `ReactHotLoaderTransformer \| null` | -           |
| `isTypeScriptTransformEnabled`         | `boolean`                           | -           |
| `isFlowTransformEnabled`               | `boolean`                           | -           |
| `keepUnusedImports`                    | `boolean`                           | -           |
| `nonTypeIdentifiers`                   | `any`                               | -           |
| `declarationInfo`                      | `any`                               | -           |
| `injectCreateRequireForImportRequire`  | `any`                               | -           |
| `processImportEquals`                  | `any`                               | -           |
| `processImport`                        | `any`                               | -           |
| `removeImportTypeBindings`             | `any`                               | -           |
| `shouldAutomaticallyElideImportedName` | `any`                               | -           |
| `processExportDefault`                 | `any`                               | -           |
| `processNamedExports`                  | `any`                               | -           |
| `shouldElideExportedName`              | `any`                               | -           |

## Methods

### process

**Return:** `boolean`
