# AbstractSemanticTokenProvider

## Properties

| Name                   | Type                               | Description |
| :--------------------- | :--------------------------------- | :---------- |
| `tokensBuilders`       | `any`                              | -           |
| `currentDocument`      | `LangiumDocument`                  | -           |
| `currentTokensBuilder` | `SemanticTokensBuilder`            | -           |
| `currentRange`         | `Range`                            | -           |
| `clientCapabilities`   | `SemanticTokensClientCapabilities` | -           |

## Methods

### initialize

**Return:** `void`

### semanticHighlight

**Return:** `Promise<SemanticTokens>`

### semanticHighlightRange

**Return:** `Promise<SemanticTokens>`

### semanticHighlightDelta

**Return:** `Promise<SemanticTokens | SemanticTokensDelta>`

### createAcceptor

**Return:** `SemanticTokenAcceptor`

### getDocumentTokensBuilder

**Return:** `SemanticTokensBuilder`

### computeHighlighting

**Return:** `Promise<void>`

### highlightElement

**Return:** `void | undefined | 'prune'`

### highlightToken

**Return:** `void`

### highlightProperty

**Return:** `void`

### highlightKeyword

**Return:** `void`

### highlightNode

**Return:** `void`
