# Diagnostic

Item of diagnostic information found in a DiagnosticEvent message.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `start` | `Location` | No | - |
| `end` | `Location` | No | - |
| `text` | `string` | No | - |
| `category` | `string` | No | - |
| `reportsUnnecessary` | `{}` | Yes | - |
| `reportsDeprecated` | `{}` | Yes | - |
| `relatedInformation` | `DiagnosticRelatedInformation[]` | Yes | - |
| `code` | `number` | Yes | - |
| `source` | `string` | Yes | - |