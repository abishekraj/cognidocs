# ReloadRequest

Reload request message; value of command field is "reload". Reload contents of file with name given by the 'file' argument from temporary file with name given by the 'tmpfile' argument. The two names can be identical.

## Properties

| Name        | Type                  | Optional | Description |
| :---------- | :-------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Reload` | No       | -           |
| `arguments` | `ReloadRequestArgs`   | No       | -           |
