# TreeAdapter

Tree adapter is a set of utility functions that provides minimal required abstraction layer beetween parser and a specific AST format. Note that `TreeAdapter` is not designed to be a general purpose AST manipulation library. You can build such library on top of existing `TreeAdapter` or use one of the existing libraries from npm.

## Properties

| Name         | Type                                                    | Optional | Description |
| :----------- | :------------------------------------------------------ | :------- | :---------- |
| `onItemPush` | `(item: T['element']) => void`                          | Yes      | -           |
| `onItemPop`  | `(item: T['element'], newTop: T['parentNode']) => void` | Yes      | -           |
