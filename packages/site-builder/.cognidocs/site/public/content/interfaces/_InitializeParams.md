# \_InitializeParams

The initialize parameters

## Properties

| Name         | Type              | Optional | Description |
| :----------- | :---------------- | :------- | :---------- |
| `processId`  | `integer \| null` | No       | -           |
| `clientInfo` | `{                |

        /**
         * The name of the client as defined by the client.
         */
        name: string;
        /**
         * The client's version as defined by the client.
         */
        version?: string;
    }` | Yes | - |

| `locale` | `string` | Yes | - |
| `rootPath` | `string \| null` | Yes | - |
| `rootUri` | `DocumentUri \| null` | No | - |
| `capabilities` | `ClientCapabilities` | No | - |
| `initializationOptions` | `LSPAny` | Yes | - |
| `trace` | `TraceValues` | Yes | - |
