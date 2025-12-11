# blurImage

Blurs the given ImageData in-place, blurring each of the RGBA layers independently by applying an horizontal blur of radius rx and a vertical blur of radius ry (which defaults to rx). Returns the blurred ImageData.


**Return Type:** `ImageData`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `imageData` | `ImageData` | No | - |
| `rx` | `number` | No | - |
| `ry` | `number` | Yes | - |