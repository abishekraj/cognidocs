# zwitch

Handle values based on a field.

**Return Type:** `{
(...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<
Handlers[keyof Handlers]

> (...parameters: Parameters<Unknown>): ReturnType<Unknown>
> unknown: Unknown
> invalid: Invalid
> handlers: Handlers
> }`

## Parameters

| Name      | Type                                               | Optional | Description         |
| :-------- | :------------------------------------------------- | :------- | :------------------ |
| `key`     | `string`                                           | No       | Field to switch on. |
| `options` | `Options<Invalid, Unknown, Handlers> \| undefined` | Yes      | -                   |
