# DefaultWorkspaceManager
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `initialBuildOptions` | `BuildOptions` | - |
| `serviceRegistry` | `ServiceRegistry` | - |
| `langiumDocuments` | `LangiumDocuments` | - |
| `documentBuilder` | `DocumentBuilder` | - |
| `fileSystemProvider` | `FileSystemProvider` | - |
| `mutex` | `WorkspaceLock` | - |
| `_ready` | `any` | - |
| `folders` | `WorkspaceFolder[]` | - |

## Methods
### initialize
**Return:** `void`

### initialized
**Return:** `Promise<void>`

### initializeWorkspace
**Return:** `Promise<void>`

### performStartup
**Return:** `Promise<LangiumDocument[]>`

### loadAdditionalDocuments
**Return:** `Promise<void>`

### getRootFolder
**Return:** `URI`

### traverseFolder
**Return:** `Promise<void>`

### includeEntry
**Return:** `boolean`
