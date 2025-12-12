# ChangeRequest

Change request message; value of command field is "change". Update the server's view of the file named by argument 'file'. Server does not currently send a response to a change request.

## Properties

| Name        | Type                  | Optional | Description |
| :---------- | :-------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Change` | No       | -           |
| `arguments` | `ChangeRequestArgs`   | No       | -           |
