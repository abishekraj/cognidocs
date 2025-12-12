# memoizedBinarySearch

This overly complicated beast is just to record the last tested line/column and the resulting index, allowing us to skip a few tests if mappings are monotonically increasing.

**Return Type:** `number`

## Parameters

| Name       | Type                                     | Optional | Description |
| :--------- | :--------------------------------------- | :------- | :---------- |
| `haystack` | `SourceMapSegment[] \| ReverseSegment[]` | No       | -           |
| `needle`   | `number`                                 | No       | -           |
| `state`    | `MemoState`                              | No       | -           |
| `key`      | `number`                                 | No       | -           |
