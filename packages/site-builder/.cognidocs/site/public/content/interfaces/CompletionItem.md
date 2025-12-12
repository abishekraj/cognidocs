# CompletionItem

A completion item represents a text snippet that is proposed to complete text that is being typed.

## Properties

| Name                  | Type                            | Optional | Description |
| :-------------------- | :------------------------------ | :------- | :---------- |
| `label`               | `string`                        | No       | -           |
| `labelDetails`        | `CompletionItemLabelDetails`    | Yes      | -           |
| `kind`                | `CompletionItemKind`            | Yes      | -           |
| `tags`                | `CompletionItemTag[]`           | Yes      | -           |
| `detail`              | `string`                        | Yes      | -           |
| `documentation`       | `string \| MarkupContent`       | Yes      | -           |
| `deprecated`          | `boolean`                       | Yes      | -           |
| `preselect`           | `boolean`                       | Yes      | -           |
| `sortText`            | `string`                        | Yes      | -           |
| `filterText`          | `string`                        | Yes      | -           |
| `insertText`          | `string`                        | Yes      | -           |
| `insertTextFormat`    | `InsertTextFormat`              | Yes      | -           |
| `insertTextMode`      | `InsertTextMode`                | Yes      | -           |
| `textEdit`            | `TextEdit \| InsertReplaceEdit` | Yes      | -           |
| `textEditText`        | `string`                        | Yes      | -           |
| `additionalTextEdits` | `TextEdit[]`                    | Yes      | -           |
| `commitCharacters`    | `string[]`                      | Yes      | -           |
| `command`             | `Command`                       | Yes      | -           |
| `data`                | `LSPAny`                        | Yes      | -           |
