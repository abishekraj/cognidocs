# dragEnable

Allows native drag-and-drop and text selection on the specified window; undoes the effect of d3.dragDisable. This method is intended to be called on mouseup, preceded by d3.dragDisable on mousedown. If noclick is true, this method also temporarily suppresses click events. The suppression of click events expires after a zero-millisecond timeout, such that it only suppress the click event that would immediately follow the current mouseup event, if any.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `window` | `Window` | No | The window for which drag should be (re-)enabled. |
| `noClick` | `boolean` | Yes | An optional flag. If noclick is true, this method also temporarily suppresses click events. |