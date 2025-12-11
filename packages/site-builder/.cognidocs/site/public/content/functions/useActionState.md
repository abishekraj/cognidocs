# useActionState

**Return Type:** `[state: Awaited<State>, dispatch: () => void, isPending: boolean]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `action` | `(state: Awaited<State>) => State \| Promise<State>` | No | - |
| `initialState` | `Awaited<State>` | No | - |
| `permalink` | `string` | Yes | - |