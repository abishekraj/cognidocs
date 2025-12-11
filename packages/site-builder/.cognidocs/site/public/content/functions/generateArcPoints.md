# generateArcPoints

Generates evenly spaced points along an elliptical arc connecting two points.


**Return Type:** `{
    x: number;
    y: number;
}[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `x1` | `number` | No | x-coordinate of the start point of the arc |
| `y1` | `number` | No | y-coordinate of the start point of the arc |
| `x2` | `number` | No | x-coordinate of the end point of the arc |
| `y2` | `number` | No | y-coordinate of the end point of the arc |
| `rx` | `number` | No | horizontal radius of the ellipse |
| `ry` | `number` | No | vertical radius of the ellipse |
| `clockwise` | `boolean` | No | direction of the arc; true for clockwise, false for counterclockwise |