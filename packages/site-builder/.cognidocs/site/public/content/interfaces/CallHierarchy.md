# CallHierarchy

Shape of the call hierarchy feature

## Properties

| Name                                                                                                                                                                  | Type | Optional | Description |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--- | :------- | :---------- |
| `callHierarchy`                                                                                                                                                       | `{   |
| onPrepare(handler: ServerRequestHandler<CallHierarchyPrepareParams, CallHierarchyItem[] \| null, never, void>): Disposable;                                           |
| onIncomingCalls(handler: ServerRequestHandler<CallHierarchyIncomingCallsParams, CallHierarchyIncomingCall[] \| null, CallHierarchyIncomingCall[], void>): Disposable; |
| onOutgoingCalls(handler: ServerRequestHandler<CallHierarchyOutgoingCallsParams, CallHierarchyOutgoingCall[] \| null, CallHierarchyOutgoingCall[], void>): Disposable; |
| }`                                                                                                                                                                    | No   | -        |
