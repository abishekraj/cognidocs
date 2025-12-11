# RenderToPipeableStreamOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `identifierPrefix` | `string` | Yes | - |
| `namespaceURI` | `string` | Yes | - |
| `nonce` | `string` | Yes | - |
| `bootstrapScriptContent` | `string` | Yes | - |
| `bootstrapScripts` | `Array<string \| BootstrapScriptDescriptor>` | Yes | - |
| `bootstrapModules` | `Array<string \| BootstrapScriptDescriptor>` | Yes | - |
| `progressiveChunkSize` | `number` | Yes | - |
| `onShellReady` | `() => void` | Yes | - |
| `onShellError` | `(error: unknown) => void` | Yes | - |
| `onAllReady` | `() => void` | Yes | - |
| `onError` | `(error: unknown, errorInfo: ErrorInfo) => string \| void` | Yes | - |