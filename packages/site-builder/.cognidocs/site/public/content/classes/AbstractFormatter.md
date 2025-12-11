# AbstractFormatter
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `collector` | `FormattingCollector` | - |

## Methods
### getNodeFormatter
**Return:** `NodeFormatter<T>`

### formatDocument
**Return:** `MaybePromise<TextEdit[]>`

### isFormatRangeErrorFree
**Return:** `boolean`

### formatDocumentRange
**Return:** `MaybePromise<TextEdit[]>`

### formatDocumentOnType
**Return:** `MaybePromise<TextEdit[]>`

### doDocumentFormat
**Return:** `TextEdit[]`

### avoidOverlappingEdits
**Return:** `TextEdit[]`

### iterateAstFormatting
**Return:** `void`

### format
**Return:** `void`

### nodeModeToKey
**Return:** `string`

### insideRange
**Return:** `boolean`

### isNecessary
**Return:** `boolean`

### iterateCstFormatting
**Return:** `TextEdit[]`

### createHiddenTextEdits
**Return:** `TextEdit[]`

### getExistingIndentationCharacterCount
**Return:** `number`

### getIndentationCharacterCount
**Return:** `number`

### createTextEdit
**Return:** `TextEdit[]`

### createSpaceTextEdit
**Return:** `TextEdit`

### createLineTextEdit
**Return:** `TextEdit`

### createTabTextEdit
**Return:** `TextEdit`

### fitIntoOptions
**Return:** `number`

### findFittingMove
**Return:** `FormattingMove | undefined`

### iterateCstTree
**Return:** `Stream<CstNode>`

### iterateCst
**Return:** `Stream<CstNode>`
