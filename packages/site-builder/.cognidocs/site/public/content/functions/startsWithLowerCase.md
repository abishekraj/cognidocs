# startsWithLowerCase

Spec for identifiers: https://tc39.github.io/ecma262/#prod-IdentifierStart. Really only treat anything starting with a-z as tag names.  `_`, `$`, `é` should be treated as component names


**Return Type:** `boolean`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `s` | `string` | No | - |