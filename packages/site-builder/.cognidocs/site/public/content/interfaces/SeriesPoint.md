# SeriesPoint

Each series point j in a stack chart corresponds to the jth element in the input data. Each point is represented as an array [y0, y1] where y0 is the lower value (baseline) and y1 is the upper value (topline); the difference between y0 and y1 corresponds to the computed value for this point. SeriesPoint is a [number, number] two-element Array with added data and index properties related to the data element which formed the basis for theSeriesPoint.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `0` | `number` | No | - |
| `1` | `number` | No | - |
| `data` | `Datum` | No | - |