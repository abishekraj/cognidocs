# getAllVersions

Returns all browser versions known to this module with their level of Baseline support as a JavaScript `Array` (`"array"`), `Object` (`"object"`) or a CSV string (`"csv"`). Takes an optional configuration `Object` with three optional properties: - `includeDownstreamBrowsers`: `true` (default) or `false` - `outputFormat`: `"array"` (default), `"object"` or `"csv"` - `useSupports`: `false` (default) or `true`, replaces `wa_compatible` property with optional `supports` property which returns `widely` or `newly` available when present.


**Return Type:** `AllBrowsersBrowserVersion[] | NestedBrowserVersions | string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `userOptions` | `AllVersionsOptions` | Yes | - |