# \_\_decorate

**Return Type:** `any`

## Parameters

| Name         | Type               | Optional | Description                                                                          |
| :----------- | :----------------- | :------- | :----------------------------------------------------------------------------------- |
| `decorators` | `Function[]`       | No       | The set of decorators to apply.                                                      |
| `target`     | `any`              | No       | The target object.                                                                   |
| `key`        | `string \| symbol` | Yes      | If specified, the own property to apply the decorators to.                           |
| `desc`       | `any`              | Yes      | The property descriptor, defaults to fetching the descriptor from the target object. |
