# RecognizerEngine

This trait is responsible for the runtime parsing engine Used by the official API (recognizer_api.ts)

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `isBackTrackingStack` | `boolean[]` | - |
| `className` | `string` | - |
| `RULE_STACK` | `number[]` | - |
| `RULE_OCCURRENCE_STACK` | `number[]` | - |
| `definedRulesNames` | `string[]` | - |
| `tokensMap` | `{ [fqn: string]: TokenType }` | - |
| `gastProductionsCache` | `Record<string, Rule>` | - |
| `shortRuleNameToFull` | `Record<string, string>` | - |
| `fullRuleNameToShort` | `Record<string, number>` | - |
| `ruleShortNameIdx` | `number` | - |
| `tokenMatcher` | `TokenMatcher` | - |
| `subruleIdx` | `number` | - |

## Methods
### initRecognizerEngine
**Return:** `void`

### defineRule
**Return:** `ParserMethodInternal<ARGS, R>`

### invokeRuleCatch
**Return:** `unknown`

### optionInternal
**Return:** `OUT | undefined`

### optionInternalLogic
**Return:** `OUT | undefined`

### atLeastOneInternal
**Return:** `void`

### atLeastOneInternalLogic
**Return:** `void`

### atLeastOneSepFirstInternal
**Return:** `void`

### atLeastOneSepFirstInternalLogic
**Return:** `void`

### manyInternal
**Return:** `void`

### manyInternalLogic
**Return:** `void`

### manySepFirstInternal
**Return:** `void`

### manySepFirstInternalLogic
**Return:** `void`

### repetitionSepSecondInternal
**Return:** `void`

### doSingleRepetition
**Return:** `any`

### orInternal
**Return:** `T`

### ruleFinallyStateUpdate
**Return:** `void`

### subruleInternal
**Return:** `R`

### subruleInternalError
**Return:** `void`

### consumeInternal
**Return:** `IToken`

### consumeInternalError
**Return:** `void`

### consumeInternalRecovery
**Return:** `IToken`

### saveRecogState
**Return:** `IParserState`

### reloadRecogState
**Return:** `void`

### ruleInvocationStateUpdate
**Return:** `void`

### isBackTracking
**Return:** `boolean`

### getCurrRuleFullName
**Return:** `string`

### shortRuleNameToFullName
**Return:** `void`

### isAtEndOfInput
**Return:** `boolean`

### reset
**Return:** `void`
