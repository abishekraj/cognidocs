# traceSegment

A low-level API to find the segment associated with a generated line/column (think, from a stack trace). Line and column here are 0-based, unlike `originalPositionFor`.


**Return Type:** `Readonly<SourceMapSegment> | null`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `map` | `TraceMap` | No | - |
| `line` | `number` | No | - |
| `column` | `number` | No | - |