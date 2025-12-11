# formatMessages

Converts log messages to formatted message strings suitable for printing in the terminal. This allows you to reuse the built-in behavior of esbuild's log message formatter. This is a batch-oriented API for efficiency. - Works in node: yes - Works in browser: yes


**Return Type:** `Promise<string[]>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `messages` | `PartialMessage[]` | No | - |
| `options` | `FormatMessagesOptions` | No | - |