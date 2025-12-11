# calculateTextHeight

This calculates the text's height, taking into account the wrap breaks and both the statically configured height, width, and the length of the text (in pixels). If the wrapped text has greater height, we extend the height, so it's value won't overflow.


**Return Type:** `ReturnType<typeof calculateTextDimensions>['height']`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `text` | `Parameters<typeof calculateTextDimensions>[0]` | No | The text to measure |
| `config` | `Parameters<typeof calculateTextDimensions>[1]` | No | The config for fontSize, fontFamily, and fontWeight all impacting the resulting size |