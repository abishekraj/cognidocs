# State

## Properties

| Name                                | Type                | Description |
| :---------------------------------- | :------------------ | :---------- |
| `potentialArrowAt`                  | `number`            | -           |
| `noAnonFunctionType`                | `boolean`           | -           |
| `inDisallowConditionalTypesContext` | `boolean`           | -           |
| `tokens`                            | `Array<Token>`      | -           |
| `scopes`                            | `Array<Scope>`      | -           |
| `pos`                               | `number`            | -           |
| `type`                              | `TokenType`         | -           |
| `contextualKeyword`                 | `ContextualKeyword` | -           |
| `start`                             | `number`            | -           |
| `end`                               | `number`            | -           |
| `isType`                            | `boolean`           | -           |
| `scopeDepth`                        | `number`            | -           |
| `error`                             | `Error \| null`     | -           |

## Methods

### snapshot

**Return:** `StateSnapshot`

### restoreFromSnapshot

**Return:** `void`
