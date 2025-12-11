# __addDisposableResource

**Return Type:** `T`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `env` | `{ stack: { value?: unknown, dispose?: Function, async: boolean }[]; error: unknown; hasError: boolean; }` | No | A resource-tracking environment object. |
| `value` | `T` | No | Either a Disposable or AsyncDisposable object, `null`, or `undefined`. |
| `async` | `boolean` | No | When `true`, `AsyncDisposable` resources can be added. When `false`, `AsyncDisposable` resources cannot be added. |