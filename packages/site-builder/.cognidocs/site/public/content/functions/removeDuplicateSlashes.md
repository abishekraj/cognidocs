# removeDuplicateSlashes

This package only works with forward slashes as a path separator. Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `pattern` | `string` | No | - |