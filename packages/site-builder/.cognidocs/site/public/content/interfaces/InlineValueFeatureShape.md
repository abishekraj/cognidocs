# InlineValueFeatureShape

Shape of the inline values feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `inlineValue` | `{
        /**
         * Ask the client to refresh all inline values.
         */
        refresh(): Promise<void>;
        /**
         * Installs a handler for the inline values request.
         *
         * @param handler The corresponding handler.
         */
        on(handler: ServerRequestHandler<InlineValueParams, InlineValue[] \| undefined \| null, InlineValue[], void>): Disposable;
    }` | No | - |