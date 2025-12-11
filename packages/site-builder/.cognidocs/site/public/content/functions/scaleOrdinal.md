# scaleOrdinal

Constructs a new ordinal scale with the specified range. The domain defaults to the empty array. If range is not specified, it defaults to the empty array; an ordinal scale always returns undefined until a non-empty range is defined. The generic corresponds to the data type of range elements.


**Return Type:** `ScaleOrdinal<string, Range>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `range` | `Iterable<Range>` | Yes | An optional array of range values to initialize the scale with. |