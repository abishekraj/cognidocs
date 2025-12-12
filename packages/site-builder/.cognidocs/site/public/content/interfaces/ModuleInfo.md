# ModuleInfo

## Properties

| Name                               | Type                               | Optional | Description |
| :--------------------------------- | :--------------------------------- | :------- | :---------- |
| `ast`                              | `ProgramNode \| null`              | No       | -           |
| `code`                             | `string \| null`                   | No       | -           |
| `dynamicImporters`                 | `readonly string[]`                | No       | -           |
| `dynamicallyImportedIdResolutions` | `readonly ResolvedId[]`            | No       | -           |
| `dynamicallyImportedIds`           | `readonly string[]`                | No       | -           |
| `exportedBindings`                 | `Record<string, string[]> \| null` | No       | -           |
| `exports`                          | `string[] \| null`                 | No       | -           |
| `safeVariableNames`                | `Record<string, string> \| null`   | No       | -           |
| `hasDefaultExport`                 | `boolean \| null`                  | No       | -           |
| `id`                               | `string`                           | No       | -           |
| `implicitlyLoadedAfterOneOf`       | `readonly string[]`                | No       | -           |
| `implicitlyLoadedBefore`           | `readonly string[]`                | No       | -           |
| `importedIdResolutions`            | `readonly ResolvedId[]`            | No       | -           |
| `importedIds`                      | `readonly string[]`                | No       | -           |
| `importers`                        | `readonly string[]`                | No       | -           |
| `isEntry`                          | `boolean`                          | No       | -           |
| `isExternal`                       | `boolean`                          | No       | -           |
| `isIncluded`                       | `boolean \| null`                  | No       | -           |
