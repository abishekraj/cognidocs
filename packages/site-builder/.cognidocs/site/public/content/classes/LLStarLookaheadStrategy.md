# LLStarLookaheadStrategy
**Extends:** `LLkLookaheadStrategy`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `atn` | `ATN` | - |
| `dfas` | `DFACache[]` | - |
| `logging` | `AmbiguityReport` | - |

## Methods
### initialize
**Return:** `void`

### validateAmbiguousAlternationAlternatives
**Return:** `ILookaheadValidationError[]`

### validateEmptyOrAlternatives
**Return:** `ILookaheadValidationError[]`

### buildLookaheadForAlternation
**Return:** `(this: BaseParser, orAlts?: IOrAlt<any>[] | undefined) => number | undefined`

### buildLookaheadForOptional
**Return:** `(this: BaseParser) => boolean`
