# createHierarchyRequestHandler

**Return Type:** `ServerRequestHandler<P, R, PR, E>`

## Parameters

| Name             | Type                                                                                                             | Optional | Description |
| :--------------- | :--------------------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `serviceCall`    | `(services: LangiumCoreAndPartialLSPServices, params: P, cancelToken: CancellationToken) => HandlerResult<R, E>` | No       | -           |
| `sharedServices` | `LangiumSharedServices`                                                                                          | No       | -           |
