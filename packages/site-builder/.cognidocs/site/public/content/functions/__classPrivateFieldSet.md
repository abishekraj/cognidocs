# __classPrivateFieldSet

**Return Type:** `V`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `receiver` | `T` | No | The instance on which to set a private field value. |
| `state` | `{ has(o: T): boolean, set(o: T, value: V): unknown }` | No | A WeakMap used to store the private field value for an instance. |
| `value` | `V` | No | The value to store in the private field. |
| `kind` | `"f"` | Yes | Either `"f"` for a field, `"a"` for an accessor, or `"m"` for a method. |