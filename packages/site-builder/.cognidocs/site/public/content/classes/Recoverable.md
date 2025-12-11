# Recoverable

This trait is responsible for the error recovery and fault tolerant logic

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `recoveryEnabled` | `boolean` | - |
| `firstAfterRepMap` | `Record<string, IFirstAfterRepetition>` | - |
| `resyncFollows` | `Record<string, TokenType[]>` | - |

## Methods
### initRecoverable
**Return:** `void`

### getTokenToInsert
**Return:** `IToken`

### canTokenTypeBeInsertedInRecovery
**Return:** `boolean`

### canTokenTypeBeDeletedInRecovery
**Return:** `boolean`

### tryInRepetitionRecovery
**Return:** `void`

### shouldInRepetitionRecoveryBeTried
**Return:** `boolean`

### getFollowsForInRuleRecovery
**Return:** `TokenType[]`

### tryInRuleRecovery
**Return:** `IToken`

### canPerformInRuleRecovery
**Return:** `boolean`

### canRecoverWithSingleTokenInsertion
**Return:** `boolean`

### canRecoverWithSingleTokenDeletion
**Return:** `boolean`

### isInCurrentRuleReSyncSet
**Return:** `boolean`

### findReSyncTokenType
**Return:** `TokenType`

### getCurrFollowKey
**Return:** `IFollowKey`

### buildFullFollowKeyStack
**Return:** `IFollowKey[]`

### flattenFollowSet
**Return:** `TokenType[]`

### getFollowSetFromFollowKey
**Return:** `TokenType[]`

### addToResyncTokens
**Return:** `IToken[]`

### reSyncTo
**Return:** `IToken[]`

### attemptInRepetitionRecovery
**Return:** `void`

### getCurrentGrammarPath
**Return:** `ITokenGrammarPath`

### getHumanReadableRuleStack
**Return:** `string[]`
