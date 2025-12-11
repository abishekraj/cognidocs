# DiagnosticWithLinePosition

Represents diagnostic info that includes location of diagnostic in two forms - start position and length of the error span - startLocation and endLocation - a pair of Location objects that store start/end line and offset of the error span.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `message` | `string` | No | - |
| `start` | `number` | No | - |
| `length` | `number` | No | - |
| `startLocation` | `Location` | No | - |
| `endLocation` | `Location` | No | - |
| `category` | `string` | No | - |
| `code` | `number` | No | - |
| `reportsUnnecessary` | `{}` | Yes | - |
| `reportsDeprecated` | `{}` | Yes | - |
| `relatedInformation` | `DiagnosticRelatedInformation[]` | Yes | - |