# InlineCompletionFeatureShape

Shape of the inline completions feature

## Properties

| Name               | Type | Optional | Description |
| :----------------- | :--- | :------- | :---------- |
| `inlineCompletion` | `{   |

        /**
         * Installs a handler for the inline completions request.
         *
         * @param handler The corresponding handler.
         */
        on(handler: ServerRequestHandler<InlineCompletionParams, InlineCompletionList \| InlineCompletionItem[] \| undefined \| null, InlineCompletionItem[], void>): Disposable;
    }` | No | - |
