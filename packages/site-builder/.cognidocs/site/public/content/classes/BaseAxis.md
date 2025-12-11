# BaseAxis
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `axisConfig` | `XYChartAxisConfig` | - |
| `title` | `string` | - |
| `textDimensionCalculator` | `TextDimensionCalculator` | - |
| `axisThemeConfig` | `XYChartAxisThemeConfig` | - |
| `boundingRect` | `BoundingRect` | - |
| `axisPosition` | `AxisPosition` | - |
| `range` | `any` | - |
| `showTitle` | `boolean` | - |
| `showLabel` | `boolean` | - |
| `showTick` | `boolean` | - |
| `showAxisLine` | `boolean` | - |
| `outerPadding` | `number` | - |
| `titleTextHeight` | `number` | - |
| `labelTextHeight` | `number` | - |
| `getLabelDimension` | `any` | - |
| `calculateSpaceIfDrawnHorizontally` | `any` | - |
| `calculateSpaceIfDrawnVertical` | `any` | - |
| `getDrawableElementsForLeftAxis` | `any` | - |
| `getDrawableElementsForBottomAxis` | `any` | - |
| `getDrawableElementsForTopAxis` | `any` | - |

## Methods
### setRange
**Return:** `void`

### getRange
**Return:** `[number, number]`

### setAxisPosition
**Return:** `void`

### getScaleValue
**Return:** `number`

### recalculateScale
**Return:** `void`

### getTickValues
**Return:** `(string | number)[]`

### getTickDistance
**Return:** `number`

### getAxisOuterPadding
**Return:** `number`

### recalculateOuterPaddingToDrawBar
**Return:** `void`

### calculateSpace
**Return:** `Dimension`

### setBoundingBoxXY
**Return:** `void`

### getDrawableElements
**Return:** `DrawableElem[]`
