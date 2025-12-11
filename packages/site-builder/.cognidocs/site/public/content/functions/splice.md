# splice

Like `Array#splice`, but smarter for giant arrays. `Array#splice` takes all items to be inserted as individual argument which causes a stack overflow in V8 when trying to insert 100k items for instance. Otherwise, this does not return the removed items, and takes `items` as an array instead of rest parameters.


**Return Type:** `undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `list` | `Array<T>` | No | List to operate on. |
| `start` | `number` | No | Index to remove/insert at (can be negative). |
| `remove` | `number` | No | Number of items to remove. |
| `items` | `Array<T>` | No | Items to inject into `list`. |