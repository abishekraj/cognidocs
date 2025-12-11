# Command

Represents a reference to a command. Provides a title which will be used to represent a command in the UI and, optionally, an array of arguments which will be passed to the command handler function when invoked.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `title` | `string` | No | - |
| `command` | `string` | No | - |
| `arguments` | `LSPAny[]` | Yes | - |