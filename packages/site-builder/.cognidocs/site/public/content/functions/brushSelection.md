# brushSelection

Return the current brush selection for the specified node. Internally, an element’s brush state is stored as element.\_\_brush; however, you should use this method rather than accessing it directly. If the given node has no selection, returns null. Otherwise, the selection is defined as an array of numbers.

**Return Type:** `BrushSelection | null`

## Parameters

| Name   | Type          | Optional | Description                                                |
| :----- | :------------ | :------- | :--------------------------------------------------------- |
| `node` | `SVGGElement` | No       | The node for which the brush selection should be returned. |
