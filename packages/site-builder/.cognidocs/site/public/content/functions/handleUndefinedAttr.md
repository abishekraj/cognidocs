# handleUndefinedAttr

D3's `selection.attr` method doesn't officially support `undefined`. However, it seems if you do pass `undefined`, it seems to be treated as `null` (e.g. it removes the attribute).

**Return Type:** `string | number | boolean | readonly (string | number)[] | import("d3-selection").ValueFn<BaseType, unknown, string | number | boolean | readonly (string | number)[] | null> | null`

## Parameters

| Name        | Type                                                                                    | Optional | Description |
| :---------- | :-------------------------------------------------------------------------------------- | :------- | :---------- |
| `attrValue` | `Parameters<d3.Selection<BaseType, unknown, HTMLElement, any>['attr']>[1] \| undefined` | No       | -           |
