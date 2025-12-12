# findAllInRenderedTree

Traverse all components in `tree` and accumulate all components where `test(component)` is `true`. This is not that useful on its own, but it's used as a primitive for other test utils.

**Return Type:** `ReactInstance[]`

## Parameters

| Name   | Type                            | Optional | Description |
| :----- | :------------------------------ | :------- | :---------- |
| `root` | `Component<any>`                | No       | -           |
| `fn`   | `(i: ReactInstance) => boolean` | No       | -           |
