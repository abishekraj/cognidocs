# useCallbackRef

creates a MutableRef with ref change callback

**Return Type:** `MutableRefObject<T | null>`

## Parameters

| Name           | Type                                                  | Optional | Description                          |
| :------------- | :---------------------------------------------------- | :------- | :----------------------------------- |
| `initialValue` | `T \| null`                                           | No       | initial ref value                    |
| `callback`     | `(newValue: T \| null, lastValue: T \| null) => void` | No       | a callback to run when value changes |
