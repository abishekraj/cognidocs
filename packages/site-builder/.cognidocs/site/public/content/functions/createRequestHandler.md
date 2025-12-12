# createRequestHandler

**Return Type:** `RequestHandler<P, R | null, E>`

## Parameters

| Name             | Type                                                                                                                                        | Optional | Description |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------- | :---------- |
| `serviceCall`    | `(services: LangiumCoreAndPartialLSPServices, document: LangiumDocument, params: P, cancelToken: CancellationToken) => HandlerResult<R, E>` | No       | -           |
| `sharedServices` | `LangiumSharedServices`                                                                                                                     | No       | -           |
| `targetState`    | `DocumentState`                                                                                                                             | Yes      | -           |
