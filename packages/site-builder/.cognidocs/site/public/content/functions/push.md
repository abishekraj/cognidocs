# push

Append `items` (an array) at the end of `list` (another array). When `list` was empty, returns `items` instead. This prevents a potentially expensive operation when `list` is empty, and adds items in batches to prevent V8 from hanging.

**Return Type:** `Array<T>`

## Parameters

| Name    | Type       | Optional | Description             |
| :------ | :--------- | :------- | :---------------------- |
| `list`  | `Array<T>` | No       | List to operate on.     |
| `items` | `Array<T>` | No       | Items to add to `list`. |
