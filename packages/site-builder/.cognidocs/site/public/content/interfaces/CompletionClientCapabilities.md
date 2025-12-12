# CompletionClientCapabilities

Completion client capabilities

## Properties

| Name                  | Type      | Optional | Description |
| :-------------------- | :-------- | :------- | :---------- |
| `dynamicRegistration` | `boolean` | Yes      | -           |
| `completionItem`      | `{        |

        /**
         * Client supports snippets as insert text.
         *
         * A snippet can define tab stops and placeholders with `$1`, `$2`
         * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
         * the end of the snippet. Placeholders with equal identifiers are linked,
         * that is typing in one will update others too.
         */
        snippetSupport?: boolean;
        /**
         * Client supports commit characters on a completion item.
         */
        commitCharactersSupport?: boolean;
        /**
         * Client supports the following content formats for the documentation
         * property. The order describes the preferred format of the client.
         */
        documentationFormat?: MarkupKind[];
        /**
         * Client supports the deprecated property on a completion item.
         */
        deprecatedSupport?: boolean;
        /**
         * Client supports the preselect property on a completion item.
         */
        preselectSupport?: boolean;
        /**
         * Client supports the tag property on a completion item. Clients supporting
         * tags have to handle unknown tags gracefully. Clients especially need to
         * preserve unknown tags when sending a completion item back to the server in
         * a resolve call.
         *
         * @since 3.15.0
         */
        tagSupport?: {
            /**
             * The tags supported by the client.
             */
            valueSet: CompletionItemTag[];
        };
        /**
         * Client support insert replace edit to control different behavior if a
         * completion item is inserted in the text or should replace text.
         *
         * @since 3.16.0
         */
        insertReplaceSupport?: boolean;
        /**
         * Indicates which properties a client can resolve lazily on a completion
         * item. Before version 3.16.0 only the predefined properties `documentation`
         * and `details` could be resolved lazily.
         *
         * @since 3.16.0
         */
        resolveSupport?: {
            /**
             * The properties that a client can resolve lazily.
             */
            properties: string[];
        };
        /**
         * The client supports the `insertTextMode` property on
         * a completion item to override the whitespace handling mode
         * as defined by the client (see `insertTextMode`).
         *
         * @since 3.16.0
         */
        insertTextModeSupport?: {
            valueSet: InsertTextMode[];
        };
        /**
         * The client has support for completion item label
         * details (see also `CompletionItemLabelDetails`).
         *
         * @since 3.17.0
         */
        labelDetailsSupport?: boolean;
    }` | Yes | - |

| `completionItemKind` | `{
        /**
         * The completion item kind values the client supports. When this
         * property exists the client also guarantees that it will
         * handle values outside its set gracefully and falls back
         * to a default value when unknown.
         *
         * If this property is not present the client only supports
         * the completion items kinds from `Text`to`Reference` as defined in
         * the initial version of the protocol.
         */
        valueSet?: CompletionItemKind[];
    }` | Yes | - |
| `insertTextMode` | `InsertTextMode` | Yes | - |
| `contextSupport` | `boolean` | Yes | - |
| `completionList` | `{
        /**
         * The client supports the following itemDefaults on
         * a completion list.
         *
         * The value lists the supported property names of the
         * `CompletionList.itemDefaults` object. If omitted
         * no properties are supported.
         *
         * @since 3.17.0
         */
        itemDefaults?: string[];
    }` | Yes | - |
