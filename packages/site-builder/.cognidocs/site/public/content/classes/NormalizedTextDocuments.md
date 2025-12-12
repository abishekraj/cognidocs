# NormalizedTextDocuments

## Properties

| Name                  | Type                                                                          | Description |
| :-------------------- | :---------------------------------------------------------------------------- | :---------- |
| `_configuration`      | `TextDocumentsConfiguration<T>`                                               | -           |
| `_syncedDocuments`    | `Map<string, T>`                                                              | -           |
| `_onDidChangeContent` | `Emitter<TextDocumentChangeEvent<T>>`                                         | -           |
| `_onDidOpen`          | `Emitter<TextDocumentChangeEvent<T>>`                                         | -           |
| `_onDidClose`         | `Emitter<TextDocumentChangeEvent<T>>`                                         | -           |
| `_onDidSave`          | `Emitter<TextDocumentChangeEvent<T>>`                                         | -           |
| `_onWillSave`         | `Emitter<TextDocumentWillSaveEvent<T>>`                                       | -           |
| `_willSaveWaitUntil`  | `RequestHandler<TextDocumentWillSaveEvent<T>, TextEdit[], void> \| undefined` | -           |

## Methods

### onWillSaveWaitUntil

**Return:** `void`

### get

**Return:** `T | undefined`

### set

**Return:** `boolean`

### delete

**Return:** `void`

### all

**Return:** `T[]`

### keys

**Return:** `string[]`

### listen

**Return:** `Disposable`
