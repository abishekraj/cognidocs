# toStringAndTrace

**Return Type:** `{ text: string, trace: TraceRegion }`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `input` | `GeneratorNode` | No | - |
| `defaultIndentation` | `string \| number` | Yes | the indentation to be applied if no explicit indentation is configured for particular {@link IndentNode IndentNodes}, either a `string` or a `number` of repeated single spaces, defaults to 4 single spaces, see {@link processGeneratorNode} -> `Context`. |