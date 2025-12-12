# objectMethod

**Return Type:** `ObjectMethod`

## Parameters

| Name        | Type                                                                           | Optional | Description |
| :---------- | :----------------------------------------------------------------------------- | :------- | :---------- |
| `kind`      | `"method" \| "get" \| "set" \| undefined`                                      | No       | -           |
| `key`       | `Expression \| Identifier \| StringLiteral \| NumericLiteral \| BigIntLiteral` | No       | -           |
| `params`    | `Array<FunctionParameter>`                                                     | No       | -           |
| `body`      | `BlockStatement`                                                               | No       | -           |
| `computed`  | `boolean`                                                                      | Yes      | -           |
| `generator` | `boolean`                                                                      | Yes      | -           |
| `async`     | `boolean`                                                                      | Yes      | -           |
