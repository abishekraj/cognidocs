# getCompatibleVersions

Returns browser versions compatible with specified Baseline targets. Defaults to returning the minimum versions of the core browser set that support Baseline Widely available. Takes an optional configuration `Object` with four optional properties: - `listAllCompatibleVersions`: `false` (default) or `false` - `includeDownstreamBrowsers`: `false` (default) or `false` - `widelyAvailableOnDate`: date in format `YYYY-MM-DD` - `targetYear`: year in format `YYYY`


**Return Type:** `BrowserVersion[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `userOptions` | `Options` | Yes | - |