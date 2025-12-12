# useInsertionEffect

**Return Type:** `void`

## Parameters

| Name     | Type             | Optional | Description                                                             |
| :------- | :--------------- | :------- | :---------------------------------------------------------------------- |
| `effect` | `EffectCallback` | No       | Imperative function that can return a cleanup function                  |
| `deps`   | `DependencyList` | Yes      | If present, effect will only activate if the values in the list change. |
