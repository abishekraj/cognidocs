# CloseRequest

Close request; value of command field is "close". Notify the server that the client has closed a previously open file.  If file is still referenced by open files, the server will resume monitoring the filesystem for changes to file.  Server does not currently send a response to a close request.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `command` | `CommandTypes.Close` | No | - |