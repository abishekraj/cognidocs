# binarySearch

A binary search implementation that returns the index if a match is found. If no match is found, then the left-index (the index associated with the item that comes just before the desired index) is returned. To maintain proper sort order, a splice would happen at the next index: ```js const array = [1, 3]; const needle = 2; const index = binarySearch(array, needle, (item, needle) => item - needle); assert.equal(index, 0); array.splice(index + 1, 0, needle); assert.deepEqual(array, [1, 2, 3]); ```


**Return Type:** `number`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `haystack` | `SourceMapSegment[] \| ReverseSegment[]` | No | - |
| `needle` | `number` | No | - |
| `low` | `number` | No | - |
| `high` | `number` | No | - |