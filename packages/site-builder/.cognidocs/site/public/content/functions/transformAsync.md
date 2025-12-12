# transformAsync

Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.

**Return Type:** `Promise<BabelFileResult | null>`

## Parameters

| Name   | Type               | Optional | Description |
| :----- | :----------------- | :------- | :---------- |
| `code` | `string`           | No       | -           |
| `opts` | `TransformOptions` | Yes      | -           |
