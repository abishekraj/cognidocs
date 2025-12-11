# wrap

Wrap `middleware` into a uniform interface. You can pass all input to the resulting function. `callback` is then called with the output of `middleware`. If `middleware` accepts more arguments than the later given in input, an extra `done` function is passed to it after that input, which must be called by `middleware`. The first value in `input` is the main input value. All other input values are the rest input values. The values given to `callback` are the input values, merged with every non-nullish output value. * if `middleware` throws an error, returns a promise that is rejected, or calls the given `done` function with an error, `callback` is called with that error * if `middleware` returns a value or returns a promise that is resolved, that value is the main output value * if `middleware` calls `done`, all non-nullish values except for the first one (the error) overwrite the output values


**Return Type:** `Run`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `middleware` | `Middleware` | No | Function to wrap. |
| `callback` | `Callback` | No | Callback called with the output of `middleware`. |