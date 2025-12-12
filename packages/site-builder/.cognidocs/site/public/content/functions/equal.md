# equal

Assert deep strict equivalence. > 👉 **Important**: only asserts when the `development` condition is used, > does nothing in production.

**Return Type:** `asserts actual is T`

## Parameters

| Name       | Type                                   | Optional | Description |
| :--------- | :------------------------------------- | :------- | :---------- |
| `actual`   | `unknown`                              | No       | Value.      |
| `expected` | `T`                                    | No       | Baseline.   |
| `message`  | `Error \| string \| null \| undefined` | Yes      | -           |
