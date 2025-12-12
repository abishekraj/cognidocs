# parseSync

Given some code, parse it using Babel's standard behavior. Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.

**Return Type:** `ParseResult | null`

## Parameters

| Name      | Type               | Optional | Description |
| :-------- | :----------------- | :------- | :---------- |
| `code`    | `string`           | No       | -           |
| `options` | `TransformOptions` | Yes      | -           |
