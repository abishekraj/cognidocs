# FoldingRange

Represents a folding range. To be valid, start and end line must be bigger than zero and smaller than the number of lines in the document. Clients are free to ignore invalid ranges.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `startLine` | `uinteger` | No | - |
| `startCharacter` | `uinteger` | Yes | - |
| `endLine` | `uinteger` | No | - |
| `endCharacter` | `uinteger` | Yes | - |
| `kind` | `FoldingRangeKind` | Yes | - |
| `collapsedText` | `string` | Yes | - |