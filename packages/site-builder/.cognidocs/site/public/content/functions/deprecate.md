# deprecate

Wrap a function or class to show a deprecation message when first called. > 👉 **Important**: only shows a message when the `development` condition is > used, does nothing in production. When the resulting wrapped `fn` is called, emits a warning once to `console.error` (`stderr`). If a code is given, one warning message will be emitted in total per code.


**Return Type:** `T`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `fn` | `T` | No | Function or class. |
| `message` | `string` | No | Message explaining deprecation. |
| `code` | `string \| null \| undefined` | Yes | - |