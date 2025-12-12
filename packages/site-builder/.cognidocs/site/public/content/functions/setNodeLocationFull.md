# setNodeLocationFull

This nodeLocation tracking is not efficient and should only be used when error recovery is enabled or the Token Vector contains virtual Tokens (e.g, Python Indent/Outdent) As it executes the calculation for every single terminal/nonTerminal and does not rely on the fact the token vector is **sorted**

**Return Type:** `void`

## Parameters

| Name               | Type              | Optional | Description |
| :----------------- | :---------------- | :------- | :---------- |
| `currNodeLocation` | `CstNodeLocation` | No       | -           |
| `newLocationInfo`  | `CstNodeLocation` | No       | -           |
