# CallHierarchyItem

Represents programming constructs like functions or constructors in the context of call hierarchy.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `name` | `string` | No | - |
| `kind` | `SymbolKind` | No | - |
| `tags` | `SymbolTag[]` | Yes | - |
| `detail` | `string` | Yes | - |
| `uri` | `DocumentUri` | No | - |
| `range` | `Range` | No | - |
| `selectionRange` | `Range` | No | - |
| `data` | `LSPAny` | Yes | - |