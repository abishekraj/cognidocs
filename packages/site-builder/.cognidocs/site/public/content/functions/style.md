# style

Returns the value of the style property with the specified name for the specified node. If the node has an inline style with the specified name, its value is returned; otherwise, the computed property value is returned. See also selection.style.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `node` | `Element` | No | A DOM node (e.g. HTMLElement, SVGElement) for which to retrieve the style property. |
| `name` | `string` | No | Style property name. |