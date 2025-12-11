# namespace

Obtain an object with properties of fully qualified namespace string and name of local by parsing a shorthand string "prefix:local". If the prefix does not exist in the "namespaces" object provided by d3-selection, then the local name is returned as a simple string.


**Return Type:** `NamespaceLocalObject | string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `prefixedLocal` | `string` | No | A string composed of the namespace prefix and local name separated by colon, e.g. "svg:text". |