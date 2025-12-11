# LooksAhead

Trait responsible for the lookahead related utilities and optimizations.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `maxLookahead` | `number` | - |
| `lookAheadFuncsCache` | `any` | - |
| `dynamicTokensEnabled` | `boolean` | - |
| `lookaheadStrategy` | `ILookaheadStrategy` | - |

## Methods
### initLooksAhead
**Return:** `void`

### preComputeLookaheadFunctions
**Return:** `void`

### computeLookaheadFunc
**Return:** `void`

### getKeyForAutomaticLookahead
**Return:** `number`

### getLaFuncFromCache
**Return:** `Function`

### setLaFuncCache
**Return:** `void`
