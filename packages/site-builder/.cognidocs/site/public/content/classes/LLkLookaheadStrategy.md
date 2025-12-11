# LLkLookaheadStrategy
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `maxLookahead` | `number` | - |

## Methods
### validate
**Return:** `ILookaheadValidationError[]`

### validateNoLeftRecursion
**Return:** `IParserDefinitionError[]`

### validateEmptyOrAlternatives
**Return:** `IParserDefinitionError[]`

### validateAmbiguousAlternationAlternatives
**Return:** `IParserDefinitionError[]`

### validateSomeNonEmptyLookaheadPath
**Return:** `IParserDefinitionError[]`

### buildLookaheadForAlternation
**Return:** `(orAlts?: IOrAlt<any>[] | undefined) => number | undefined`

### buildLookaheadForOptional
**Return:** `() => boolean`
