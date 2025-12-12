# TextDocumentEdit

Describes textual changes on a text document. A TextDocumentEdit describes all changes on a document version Si and after they are applied move the document to version Si+1. So the creator of a TextDocumentEdit doesn't need to sort the array of edits or do any kind of ordering. However the edits must be non overlapping.

## Properties

| Name           | Type                                      | Optional | Description |
| :------------- | :---------------------------------------- | :------- | :---------- |
| `textDocument` | `OptionalVersionedTextDocumentIdentifier` | No       | -           |
| `edits`        | `(TextEdit \| AnnotatedTextEdit)[]`       | No       | -           |
