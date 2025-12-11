# CodeActionClientCapabilities

The Client Capabilities of a {@link CodeActionRequest}.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `dynamicRegistration` | `boolean` | Yes | - |
| `codeActionLiteralSupport` | `{
        /**
         * The code action kind is support with the following value
         * set.
         */
        codeActionKind: {
            /**
             * The code action kind values the client supports. When this
             * property exists the client also guarantees that it will
             * handle values outside its set gracefully and falls back
             * to a default value when unknown.
             */
            valueSet: CodeActionKind[];
        };
    }` | Yes | - |
| `isPreferredSupport` | `boolean` | Yes | - |
| `disabledSupport` | `boolean` | Yes | - |
| `dataSupport` | `boolean` | Yes | - |
| `resolveSupport` | `{
        /**
         * The properties that a client can resolve lazily.
         */
        properties: string[];
    }` | Yes | - |
| `honorsChangeAnnotations` | `boolean` | Yes | - |