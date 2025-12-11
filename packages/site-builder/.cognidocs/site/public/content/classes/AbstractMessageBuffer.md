# AbstractMessageBuffer
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `_encoding` | `any` | - |
| `_chunks` | `any` | - |
| `_totalLength` | `any` | - |
| `_read` | `any` | - |

## Methods
### emptyBuffer
**Return:** `Uint8Array`

### fromString
**Return:** `Uint8Array`

### toString
**Return:** `string`

### asNative
**Return:** `Uint8Array`

### allocNative
**Return:** `Uint8Array`

### append
**Return:** `void`

### tryReadHeaders
**Return:** `Map<string, string> | undefined`

### tryReadBody
**Return:** `Uint8Array | undefined`
