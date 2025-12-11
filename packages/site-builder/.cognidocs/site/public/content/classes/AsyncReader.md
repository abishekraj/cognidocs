# AsyncReader
**Extends:** `Reader`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `_settings` | `Settings` | - |
| `_scandir` | `typeof fsScandir.scandir` | - |
| `_emitter` | `EventEmitter` | - |
| `_queue` | `any` | - |
| `_isFatalError` | `any` | - |
| `_isDestroyed` | `any` | - |
| `_pushToQueue` | `any` | - |
| `_worker` | `any` | - |
| `_handleError` | `any` | - |
| `_handleEntry` | `any` | - |
| `_emitEntry` | `any` | - |

## Methods
### read
**Return:** `EventEmitter`

### destroy
**Return:** `void`

### onEntry
**Return:** `void`

### onError
**Return:** `void`

### onEnd
**Return:** `void`
