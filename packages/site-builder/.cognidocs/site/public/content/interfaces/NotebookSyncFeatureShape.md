# NotebookSyncFeatureShape

Shape of the notebooks feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `synchronization` | `{
        onDidOpenNotebookDocument(handler: NotificationHandler1<DidOpenNotebookDocumentParams>): Disposable;
        onDidChangeNotebookDocument(handler: NotificationHandler1<DidChangeNotebookDocumentParams>): Disposable;
        onDidSaveNotebookDocument(handler: NotificationHandler1<DidSaveNotebookDocumentParams>): Disposable;
        onDidCloseNotebookDocument(handler: NotificationHandler1<DidCloseNotebookDocumentParams>): Disposable;
    }` | No | - |