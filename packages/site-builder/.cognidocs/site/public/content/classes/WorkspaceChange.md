# WorkspaceChange

A workspace change helps constructing changes to a workspace.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `_workspaceEdit` | `any` | - |
| `_textEditChanges` | `any` | - |
| `_changeAnnotations` | `any` | - |
| `initDocumentChanges` | `any` | - |
| `initChanges` | `any` | - |

## Methods
### getTextEditChange

Returns the {@link TextEditChange} to manage text edits for resources.

**Return:** `TextEditChange`

### getTextEditChange
**Return:** `TextEditChange`

### createFile
**Return:** `void`

### createFile
**Return:** `ChangeAnnotationIdentifier`

### renameFile
**Return:** `void`

### renameFile
**Return:** `ChangeAnnotationIdentifier`

### deleteFile
**Return:** `void`

### deleteFile
**Return:** `ChangeAnnotationIdentifier`
