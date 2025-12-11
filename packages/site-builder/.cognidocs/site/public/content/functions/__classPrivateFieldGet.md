# __classPrivateFieldGet

**Return Type:** `V`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `receiver` | `T` | No | The instance from which to read the private field. |
| `state` | `{ has(o: T): boolean, get(o: T): V \| undefined }` | No | A WeakMap containing the private field value for an instance. |
| `kind` | `"f"` | Yes | Either `"f"` for a field, `"a"` for an accessor, or `"m"` for a method. |