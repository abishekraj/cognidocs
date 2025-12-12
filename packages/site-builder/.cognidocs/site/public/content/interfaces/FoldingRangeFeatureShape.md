# FoldingRangeFeatureShape

Shape of the folding range feature

## Properties

| Name           | Type | Optional | Description |
| :------------- | :--- | :------- | :---------- |
| `foldingRange` | `{   |

        /**
         * Ask the client to refresh all folding ranges
         *
         * @since 3.18.0.
         * @proposed
         */
        refresh(): Promise<void>;
        /**
         * Installs a handler for the folding range request.
         *
         * @param handler The corresponding handler.
         */
        on(handler: ServerRequestHandler<FoldingRangeParams, FoldingRange[] \| undefined \| null, FoldingRange[], void>): Disposable;
    }` | No | - |
