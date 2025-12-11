# getImportExportSpecifierInfo

Determine information about this named import or named export specifier. This syntax is the `a` from statements like these: import {A} from "./foo"; export {A}; export {A} from "./foo"; As it turns out, we can exactly characterize the syntax meaning by simply counting the number of tokens, which can be from 1 to 4: {A} {type A} {A as B} {type A as B} In the type case, we never actually need the names in practice, so don't get them. TODO: There's some redundancy with the type detection here and the isType flag that's already present on tokens in TS mode. This function could potentially be simplified and/or pushed to the call sites to avoid the object allocation.


**Return Type:** `ImportExportSpecifierInfo`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tokens` | `TokenProcessor` | No | - |
| `index` | `number` | Yes | - |