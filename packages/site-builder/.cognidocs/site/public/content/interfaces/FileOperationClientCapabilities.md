# FileOperationClientCapabilities

Capabilities relating to events from file operations by the user in the client. These events do not come from the file system, they come from user operations like renaming a file in the UI.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `dynamicRegistration` | `boolean` | Yes | - |
| `didCreate` | `boolean` | Yes | - |
| `willCreate` | `boolean` | Yes | - |
| `didRename` | `boolean` | Yes | - |
| `willRename` | `boolean` | Yes | - |
| `didDelete` | `boolean` | Yes | - |
| `willDelete` | `boolean` | Yes | - |