# findRenderedComponentWithType

Same as `scryRenderedComponentsWithType()` but expects there to be one result and returns that one result, or throws exception if there is any other number of matches besides one.


**Return Type:** `T`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `root` | `Component<any>` | No | - |
| `type` | `ClassType<any, T, C>` | No | - |