# useDeferredValue

Returns a deferred version of the value that may “lag behind” it. This is commonly used to keep the interface responsive when you have something that renders immediately based on user input and something that needs to wait for a data fetch. A good example of this is a text input.


**Return Type:** `T`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `value` | `T` | No | The value that is going to be deferred |