# SemanticTokensClientCapabilities

## Properties

| Name                  | Type      | Optional | Description |
| :-------------------- | :-------- | :------- | :---------- |
| `dynamicRegistration` | `boolean` | Yes      | -           |
| `requests`            | `{        |

        /**
         * The client will send the `textDocument/semanticTokens/range` request if
         * the server provides a corresponding handler.
         */
        range?: boolean \| {};
        /**
         * The client will send the `textDocument/semanticTokens/full` request if
         * the server provides a corresponding handler.
         */
        full?: boolean \| {
            /**
             * The client will send the `textDocument/semanticTokens/full/delta` request if
             * the server provides a corresponding handler.
             */
            delta?: boolean;
        };
    }` | No | - |

| `tokenTypes` | `string[]` | No | - |
| `tokenModifiers` | `string[]` | No | - |
| `formats` | `TokenFormat[]` | No | - |
| `overlappingTokenSupport` | `boolean` | Yes | - |
| `multilineTokenSupport` | `boolean` | Yes | - |
| `serverCancelSupport` | `boolean` | Yes | - |
| `augmentsSyntaxTokens` | `boolean` | Yes | - |
