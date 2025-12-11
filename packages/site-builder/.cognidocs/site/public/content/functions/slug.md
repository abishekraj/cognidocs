# slug

Generate a slug. Does not track previously generated slugs: repeated calls with the same value will result in the exact same slug. Use the `GithubSlugger` class to get unique slugs.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `value` | `string` | No | String of text to slugify |
| `maintainCase` | `boolean \| undefined` | Yes | - |