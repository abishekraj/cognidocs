# SavetoRequest

Saveto request message; value of command field is "saveto". For debugging purposes, save to a temporaryfile (named by argument 'tmpfile') the contents of file named by argument 'file'. The server does not currently send a response to a "saveto" request.

## Properties

| Name        | Type                  | Optional | Description |
| :---------- | :-------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Saveto` | No       | -           |
| `arguments` | `SavetoRequestArgs`   | No       | -           |
