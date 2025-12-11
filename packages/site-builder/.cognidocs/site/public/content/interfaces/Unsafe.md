# Unsafe

Schema that defines when a character cannot occur.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `_compiled` | `RegExp \| null \| undefined` | Yes | - |
| `after` | `string \| null \| undefined` | Yes | - |
| `atBreak` | `boolean \| null \| undefined` | Yes | - |
| `before` | `string \| null \| undefined` | Yes | - |
| `character` | `string` | No | - |
| `inConstruct` | `Array<ConstructName> \| ConstructName \| null \| undefined` | Yes | - |
| `notInConstruct` | `Array<ConstructName> \| ConstructName \| null \| undefined` | Yes | - |