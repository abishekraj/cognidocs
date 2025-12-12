# originalPositionFor

A higher-level API to find the source/line/column associated with a generated line/column (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in `source-map` library.

**Return Type:** `OriginalMapping | InvalidOriginalMapping`

## Parameters

| Name     | Type       | Optional | Description |
| :------- | :--------- | :------- | :---------- |
| `map`    | `TraceMap` | No       | -           |
| `needle` | `Needle`   | No       | -           |
