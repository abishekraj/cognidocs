# OriginalSource

A "leaf" node in the sourcemap tree, representing an original, unmodified source file. Recursive segment tracing ends at the `OriginalSource`.

**Return Type:** `OriginalSource`

## Parameters

| Name      | Type             | Optional | Description |
| :-------- | :--------------- | :------- | :---------- |
| `source`  | `string`         | No       | -           |
| `content` | `string \| null` | No       | -           |
| `ignore`  | `boolean`        | No       | -           |
