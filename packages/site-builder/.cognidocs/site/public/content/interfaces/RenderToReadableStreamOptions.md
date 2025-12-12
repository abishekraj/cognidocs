# RenderToReadableStreamOptions

## Properties

| Name                     | Type                                                       | Optional | Description |
| :----------------------- | :--------------------------------------------------------- | :------- | :---------- |
| `identifierPrefix`       | `string`                                                   | Yes      | -           |
| `namespaceURI`           | `string`                                                   | Yes      | -           |
| `nonce`                  | `string`                                                   | Yes      | -           |
| `bootstrapScriptContent` | `string`                                                   | Yes      | -           |
| `bootstrapScripts`       | `Array<string \| BootstrapScriptDescriptor>`               | Yes      | -           |
| `bootstrapModules`       | `Array<string \| BootstrapScriptDescriptor>`               | Yes      | -           |
| `progressiveChunkSize`   | `number`                                                   | Yes      | -           |
| `signal`                 | `AbortSignal`                                              | Yes      | -           |
| `onError`                | `(error: unknown, errorInfo: ErrorInfo) => string \| void` | Yes      | -           |
