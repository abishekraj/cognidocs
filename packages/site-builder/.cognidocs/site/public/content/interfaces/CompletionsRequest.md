# CompletionsRequest

Completions request; value of command field is "completions". Given a file location (file, line, col) and a prefix (which may be the empty string), return the possible completions that begin with prefix.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `command` | `CommandTypes.Completions \| CommandTypes.CompletionInfo` | No | - |
| `arguments` | `CompletionsRequestArgs` | No | - |