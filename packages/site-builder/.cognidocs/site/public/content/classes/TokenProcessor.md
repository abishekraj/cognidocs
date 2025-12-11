# TokenProcessor
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `code` | `string` | - |
| `tokens` | `Array<Token>` | - |
| `isFlowEnabled` | `boolean` | - |
| `disableESTransforms` | `boolean` | - |
| `helperManager` | `HelperManager` | - |
| `resultCode` | `any` | - |
| `resultMappings` | `any` | - |
| `tokenIndex` | `any` | - |
| `appendTokenPrefix` | `any` | - |
| `appendTokenSuffix` | `any` | - |

## Methods
### snapshot

Snapshot the token state in a way that can be restored later, useful for things like lookahead. resultMappings do not need to be copied since in all use cases, they will be overwritten anyway after restore.

**Return:** `TokenProcessorSnapshot`

### restoreToSnapshot
**Return:** `void`

### dangerouslyGetAndRemoveCodeSinceSnapshot

Remove and return the code generated since the snapshot, leaving the current token position in-place. Unlike most TokenProcessor operations, this operation can result in input/output line number mismatches because the removed code may contain newlines, so this operation should be used sparingly.

**Return:** `string`

### reset
**Return:** `void`

### matchesContextualAtIndex
**Return:** `boolean`

### identifierNameAtIndex
**Return:** `string`

### identifierNameAtRelativeIndex
**Return:** `string`

### identifierName
**Return:** `string`

### identifierNameForToken
**Return:** `string`

### rawCodeForToken
**Return:** `string`

### stringValueAtIndex
**Return:** `string`

### stringValue
**Return:** `string`

### stringValueForToken
**Return:** `string`

### matches1AtIndex
**Return:** `boolean`

### matches2AtIndex
**Return:** `boolean`

### matches3AtIndex
**Return:** `boolean`

### matches1
**Return:** `boolean`

### matches2
**Return:** `boolean`

### matches3
**Return:** `boolean`

### matches4
**Return:** `boolean`

### matches5
**Return:** `boolean`

### matchesContextual
**Return:** `boolean`

### matchesContextIdAndLabel
**Return:** `boolean`

### previousWhitespaceAndComments
**Return:** `string`

### replaceToken
**Return:** `void`

### replaceTokenTrimmingLeftWhitespace
**Return:** `void`

### removeInitialToken
**Return:** `void`

### removeToken
**Return:** `void`

### removeBalancedCode

Remove all code until the next }, accounting for balanced braces.

**Return:** `void`

### copyExpectedToken
**Return:** `void`

### copyToken
**Return:** `void`

### copyTokenWithPrefix
**Return:** `void`

### appendCode
**Return:** `void`

### currentToken
**Return:** `Token`

### currentTokenCode
**Return:** `string`

### tokenAtRelativeIndex
**Return:** `Token`

### currentIndex
**Return:** `number`

### nextToken

Move to the next token. Only suitable in preprocessing steps. When generating new code, you should use copyToken or removeToken.

**Return:** `void`

### previousToken
**Return:** `void`

### finish
**Return:** `TokenProcessorResult`

### isAtEnd
**Return:** `boolean`
