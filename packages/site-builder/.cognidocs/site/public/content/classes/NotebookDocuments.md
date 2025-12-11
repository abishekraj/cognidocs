# NotebookDocuments
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `notebookDocuments` | `any` | - |
| `notebookCellMap` | `any` | - |
| `_onDidOpen` | `any` | - |
| `_onDidSave` | `any` | - |
| `_onDidChange` | `any` | - |
| `_onDidClose` | `any` | - |
| `_cellTextDocuments` | `any` | - |
| `updateCellMap` | `any` | - |

## Methods
### getCellTextDocument
**Return:** `T | undefined`

### getNotebookDocument
**Return:** `NotebookDocument | undefined`

### getNotebookCell
**Return:** `NotebookCell | undefined`

### findNotebookDocumentForCell
**Return:** `NotebookDocument | undefined`

### listen

Listens for `low level` notification on the given connection to update the notebook documents managed by this instance. Please note that the connection only provides handlers not an event model. Therefore listening on a connection will overwrite the following handlers on a connection: `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`, and `onDidCloseNotebookDocument`.

**Return:** `Disposable`
