# findNextFeatures

**Return Type:** `NextFeature[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `featureStack` | `NextFeature[][]` | No | A stack of features starting at the entry rule and ending at the feature of the current cursor position. |
| `unparsedTokens` | `IToken[]` | No | All tokens which haven't been parsed successfully yet. This is the case when we call this function inside an alternative. |