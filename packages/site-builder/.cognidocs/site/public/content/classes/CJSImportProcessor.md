# CJSImportProcessor

Class responsible for preprocessing and bookkeeping import and export declarations within the file. TypeScript uses a simpler mechanism that does not use functions like interopRequireDefault and interopRequireWildcard, so we also allow that mode for compatibility.

## Properties

| Name                                  | Type             | Description |
| :------------------------------------ | :--------------- | :---------- |
| `nameManager`                         | `NameManager`    | -           |
| `tokens`                              | `TokenProcessor` | -           |
| `enableLegacyTypeScriptModuleInterop` | `boolean`        | -           |
| `options`                             | `Options`        | -           |
| `isTypeScriptTransformEnabled`        | `boolean`        | -           |
| `keepUnusedImports`                   | `boolean`        | -           |
| `helperManager`                       | `HelperManager`  | -           |
| `nonTypeIdentifiers`                  | `any`            | -           |
| `importInfoByPath`                    | `any`            | -           |
| `importsToReplace`                    | `any`            | -           |
| `identifierReplacements`              | `any`            | -           |
| `exportBindingsByLocalName`           | `any`            | -           |
| `generateImportReplacements`          | `any`            | -           |
| `preprocessImportAtIndex`             | `any`            | -           |
| `preprocessExportAtIndex`             | `any`            | -           |
| `preprocessVarExportAtIndex`          | `any`            | -           |
| `preprocessNamedExportAtIndex`        | `any`            | -           |
| `preprocessExportStarAtIndex`         | `any`            | -           |
| `getNamedImports`                     | `any`            | -           |
| `getImportInfo`                       | `any`            | -           |
| `addExportBinding`                    | `any`            | -           |

## Methods

### preprocessTokens

**Return:** `void`

### pruneTypeOnlyImports

In TypeScript, import statements that only import types should be removed. This includes `import {} from 'foo';`, but not `import 'foo';`.

**Return:** `void`

### shouldAutomaticallyElideImportedName

**Return:** `boolean`

### getFreeIdentifierForPath

**Return:** `string`

### claimImportCode

Return the code to use for the import for this path, or the empty string if the code has already been "claimed" by a previous import.

**Return:** `string`

### getIdentifierReplacement

**Return:** `string | null`

### resolveExportBinding

Return a string like `exports.foo = exports.bar`.

**Return:** `string | null`

### getGlobalNames

Return all imported/exported names where we might be interested in whether usages of those names are shadowed.

**Return:** `Set<string>`
