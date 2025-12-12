# RenameRequest

Rename request; value of command field is "rename". Return response giving the file locations that reference the symbol found in file at location line, col. Also return full display name of the symbol so that client can print it unambiguously.

## Properties

| Name        | Type                  | Optional | Description |
| :---------- | :-------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Rename` | No       | -           |
| `arguments` | `RenameRequestArgs`   | No       | -           |
