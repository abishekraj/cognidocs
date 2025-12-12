# DocumentSymbolClientCapabilities

Client Capabilities for a {@link DocumentSymbolRequest}.

## Properties

| Name                  | Type      | Optional | Description |
| :-------------------- | :-------- | :------- | :---------- |
| `dynamicRegistration` | `boolean` | Yes      | -           |
| `symbolKind`          | `{        |

        /**
         * The symbol kind values the client supports. When this
         * property exists the client also guarantees that it will
         * handle values outside its set gracefully and falls back
         * to a default value when unknown.
         *
         * If this property is not present the client only supports
         * the symbol kinds from `File` to `Array` as defined in
         * the initial version of the protocol.
         */
        valueSet?: SymbolKind[];
    }` | Yes | - |

| `hierarchicalDocumentSymbolSupport` | `boolean` | Yes | - |
| `tagSupport` | `{
        /**
         * The tags supported by the client.
         */
        valueSet: SymbolTag[];
    }` | Yes | - |
| `labelSupport` | `boolean` | Yes | - |
