# timer

Schedules and returns a new timer, invoking the specified callback repeatedly until the timer is stopped. The callback is passed the (apparent) elapsed time since the timer became active.

**Return Type:** `Timer`

## Parameters

| Name       | Type                        | Optional | Description                                                                                                              |
| :--------- | :-------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| `callback` | `(elapsed: number) => void` | No       | A callback function to be invoked and passed in the apparent elapsed time since the timer became active in milliseconds. |
| `delay`    | `number`                    | Yes      | An optional numeric delay in milliseconds (default = 0) relative to time.                                                |
| `time`     | `number`                    | Yes      | An optional time in milliseconds relative to which the delay is calculated (default = now).                              |
