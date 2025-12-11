# WorkspaceSymbol

A special workspace symbol that supports locations without a range. See also SymbolInformation.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `location` | `Location \| {
        uri: DocumentUri;
    }` | No | - |
| `data` | `LSPAny` | Yes | - |