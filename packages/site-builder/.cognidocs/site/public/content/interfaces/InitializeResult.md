# InitializeResult

The result returned from an initialize request.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `capabilities` | `ServerCapabilities<T>` | No | - |
| `serverInfo` | `{
        /**
         * The name of the server as defined by the server.
         */
        name: string;
        /**
         * The server's version as defined by the server.
         */
        version?: string;
    }` | Yes | - |