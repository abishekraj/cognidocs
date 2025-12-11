# Diagram

An object representing a parsed mermaid diagram definition.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `type` | `string` | - |
| `text` | `string` | - |
| `db` | `DiagramDefinition['db']` | - |
| `parser` | `DiagramDefinition['parser']` | - |
| `renderer` | `DiagramDefinition['renderer']` | - |

## Methods
### fromText
**Return:** `Promise<Diagram>`

### render
**Return:** `Promise<void>`

### getParser
**Return:** `import("./diagram-api/types.js").ParserDefinition`

### getType
**Return:** `string`
