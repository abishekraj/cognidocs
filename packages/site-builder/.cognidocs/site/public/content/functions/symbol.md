# symbol

Constructs a new symbol generator of the specified type and size. If not specified, type defaults to a circle, and size defaults to 64. The first generic corresponds to the "this" context within which the symbol generator is invoked. The second generic corresponds to the data type of the datum underlying the symbol.


**Return Type:** `Symbol<any, Datum>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `SymbolType \| ((this: any, d: Datum, ...args: any[]) => SymbolType)` | Yes | The specified type. |
| `size` | `number \| ((this: any, d: Datum, ...args: any[]) => number)` | Yes | The specified size. |