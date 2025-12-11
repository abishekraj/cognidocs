# stream

Create a duplex (readable and writable) stream. Some of the work to parse markdown can be done streaming, but in the end buffering is required. micromark does not handle errors for you, so you must handle errors on whatever streams you pipe into it. As markdown does not know errors, `micromark` itself does not emit errors.


**Return Type:** `MinimalDuplex`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `Options \| null \| undefined` | Yes | - |