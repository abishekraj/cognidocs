# TextDocuments

A manager for simple text documents. The manager requires at a minimum that the server registered for the following text document sync events in the initialize handler or via dynamic registration: - open and close events. - change events. Registering for save and will save events is optional.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `_configuration` | `any` | - |
| `_syncedDocuments` | `any` | - |
| `_onDidChangeContent` | `any` | - |
| `_onDidOpen` | `any` | - |
| `_onDidClose` | `any` | - |
| `_onDidSave` | `any` | - |
| `_onWillSave` | `any` | - |
| `_willSaveWaitUntil` | `any` | - |

## Methods
### onWillSaveWaitUntil

Sets a handler that will be called if a participant wants to provide edits during a text document save.

**Return:** `void`

### get

Returns the document for the given URI. Returns undefined if the document is not managed by this instance.

**Return:** `T | undefined`

### all

Returns all text documents managed by this instance.

**Return:** `T[]`

### keys

Returns the URIs of all text documents managed by this instance.

**Return:** `string[]`

### listen

Listens for `low level` notification on the given connection to update the text documents managed by this instance. Please note that the connection only provides handlers not an event model. Therefore listening on a connection will overwrite the following handlers on a connection: `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`, `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`. Use the corresponding events on the TextDocuments instance instead.

**Return:** `Disposable`
