# dragDisable

Prevents native drag-and-drop and text selection on the specified window. As an alternative to preventing the default action of mousedown events, this method prevents undesirable default actions following mousedown. In supported browsers, this means capturing dragstart and selectstart events, preventing the associated default actions, and immediately stopping their propagation. In browsers that do not support selection events, the user-select CSS property is set to none on the document element. This method is intended to be called on mousedown, followed by d3.dragEnable on mouseup.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `window` | `Window` | No | The window for which drag should be disabled. |