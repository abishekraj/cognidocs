# getTSImportedNames

Special case code to scan for imported names in ESM TypeScript. We need to do this so we can properly get globals so we can compute shadowed globals. This is similar to logic in CJSImportProcessor, but trimmed down to avoid logic with CJS replacement and flow type imports.


**Return Type:** `Set<string>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tokens` | `TokenProcessor` | No | - |