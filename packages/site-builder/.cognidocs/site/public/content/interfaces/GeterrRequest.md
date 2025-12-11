# GeterrRequest

Geterr request; value of command field is "geterr". Wait for delay milliseconds and then, if during the wait no change or reload messages have arrived for the first file in the files list, get the syntactic errors for the file, field requests, and then get the semantic errors for the file.  Repeat with a smaller delay for each subsequent file on the files list.  Best practice for an editor is to send a file list containing each file that is currently visible, in most-recently-used order.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `command` | `CommandTypes.Geterr` | No | - |
| `arguments` | `GeterrRequestArgs` | No | - |