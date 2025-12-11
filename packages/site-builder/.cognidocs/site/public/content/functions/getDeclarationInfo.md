# getDeclarationInfo

Get all top-level identifiers that should be preserved when exported in TypeScript. Examples: - If an identifier is declared as `const x`, then `export {x}` should be preserved. - If it's declared as `type x`, then `export {x}` should be removed. - If it's declared as both `const x` and `type x`, then the export should be preserved. - Classes and enums should be preserved (even though they also introduce types). - Imported identifiers should be preserved since we don't have enough information to rule them out. --isolatedModules disallows re-exports, which catches errors here.


**Return Type:** `DeclarationInfo`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tokens` | `TokenProcessor` | No | - |