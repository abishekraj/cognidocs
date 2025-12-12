# JoinOptions

## Properties

| Name                       | Type                                                                                    | Optional | Description |
| :------------------------- | :-------------------------------------------------------------------------------------- | :------- | :---------- |
| `filter`                   | `(element: T, index: number, isLast: boolean) => boolean`                               | Yes      | -           |
| `prefix`                   | `Generated \| ((element: T, index: number, isLast: boolean) => Generated \| undefined)` | Yes      | -           |
| `suffix`                   | `Generated \| ((element: T, index: number, isLast: boolean) => Generated \| undefined)` | Yes      | -           |
| `separator`                | `Generated`                                                                             | Yes      | -           |
| `appendNewLineIfNotEmpty`  | `true`                                                                                  | Yes      | -           |
| `skipNewLineAfterLastItem` | `true`                                                                                  | Yes      | -           |
