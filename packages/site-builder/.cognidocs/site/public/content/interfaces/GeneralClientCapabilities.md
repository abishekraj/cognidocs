# GeneralClientCapabilities

General client capabilities.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `staleRequestSupport` | `{
        /**
         * The client will actively cancel the request.
         */
        cancel: boolean;
        /**
         * The list of requests for which the client
         * will retry the request if it receives a
         * response with error code `ContentModified`
         */
        retryOnContentModified: string[];
    }` | Yes | - |
| `regularExpressions` | `RegularExpressionsClientCapabilities` | Yes | - |
| `markdown` | `MarkdownClientCapabilities` | Yes | - |
| `positionEncodings` | `PositionEncodingKind[]` | Yes | - |