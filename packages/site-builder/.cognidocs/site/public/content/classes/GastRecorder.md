# GastRecorder

This trait handles the creation of the GAST structure for Chevrotain Grammars

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `recordingProdStack` | `ProdWithDef[]` | - |
| `RECORDING_PHASE` | `boolean` | - |

## Methods
### initGastRecorder
**Return:** `void`

### enableRecording
**Return:** `void`

### disableRecording
**Return:** `void`

### ACTION_RECORD
**Return:** `T`

### BACKTRACK_RECORD
**Return:** `() => boolean`

### LA_RECORD
**Return:** `IToken`

### topLevelRuleRecord
**Return:** `Rule`

### optionInternalRecord
**Return:** `OUT`

### atLeastOneInternalRecord
**Return:** `void`

### atLeastOneSepFirstInternalRecord
**Return:** `void`

### manyInternalRecord
**Return:** `void`

### manySepFirstInternalRecord
**Return:** `void`

### orInternalRecord
**Return:** `T`

### subruleInternalRecord
**Return:** `R | CstNode`

### consumeInternalRecord
**Return:** `IToken`
