# NavtoRequest

Navto request message; value of command field is "navto". Return list of objects giving file locations and symbols that match the search term given in argument 'searchTerm'.  The context for the search is given by the named file.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `command` | `CommandTypes.Navto` | No | - |
| `arguments` | `NavtoRequestArgs` | No | - |