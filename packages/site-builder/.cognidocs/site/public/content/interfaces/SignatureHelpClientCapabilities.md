# SignatureHelpClientCapabilities

Client Capabilities for a {@link SignatureHelpRequest}.

## Properties

| Name                   | Type      | Optional | Description |
| :--------------------- | :-------- | :------- | :---------- |
| `dynamicRegistration`  | `boolean` | Yes      | -           |
| `signatureInformation` | `{        |

        /**
         * Client supports the following content formats for the documentation
         * property. The order describes the preferred format of the client.
         */
        documentationFormat?: MarkupKind[];
        /**
         * Client capabilities specific to parameter information.
         */
        parameterInformation?: {
            /**
             * The client supports processing label offsets instead of a
             * simple label string.
             *
             * @since 3.14.0
             */
            labelOffsetSupport?: boolean;
        };
        /**
         * The client supports the `activeParameter` property on `SignatureInformation`
         * literal.
         *
         * @since 3.16.0
         */
        activeParameterSupport?: boolean;
    }` | Yes | - |

| `contextSupport` | `boolean` | Yes | - |
