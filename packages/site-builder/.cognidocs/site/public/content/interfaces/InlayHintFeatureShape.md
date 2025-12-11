# InlayHintFeatureShape

Shape of the inlay hints feature

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `inlayHint` | `{
        /**
         * Ask the client to refresh all inlay hints.
         */
        refresh(): Promise<void>;
        /**
         * Installs a handler for the inlay hints request.
         *
         * @param handler The corresponding handler.
         */
        on(handler: ServerRequestHandler<InlayHintParams, InlayHint[] \| undefined \| null, InlayHint[], void>): Disposable;
        /**
         * Installs a handler for the inlay hint resolve request.
         *
         * @param handler The corresponding handler.
         */
        resolve(handler: RequestHandler<InlayHint, InlayHint, void>): Disposable;
    }` | No | - |