# CodeActionContext

Contains additional diagnostic information about the context in which a {@link CodeActionProvider.provideCodeActions code action} is run.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `diagnostics` | `Diagnostic[]` | No | - |
| `only` | `CodeActionKind[]` | Yes | - |
| `triggerKind` | `CodeActionTriggerKind` | Yes | - |