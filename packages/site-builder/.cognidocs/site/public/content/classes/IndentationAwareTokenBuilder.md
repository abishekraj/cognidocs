# IndentationAwareTokenBuilder

**Extends:** `DefaultTokenBuilder`

## Properties

| Name               | Type                                                     | Description |
| :----------------- | :------------------------------------------------------- | :---------- |
| `indentationStack` | `number[]`                                               | -           |
| `options`          | `IndentationTokenBuilderOptions<Terminals, KeywordName>` | -           |
| `indentTokenType`  | `TokenType`                                              | -           |
| `dedentTokenType`  | `TokenType`                                              | -           |
| `whitespaceRegExp` | `any`                                                    | -           |

## Methods

### buildTokens

**Return:** `TokenVocabulary`

### flushLexingReport

**Return:** `IndentationLexingReport`

### isStartOfLine

**Return:** `boolean`

### matchWhitespace

**Return:** `{ currIndentLevel: number, prevIndentLevel: number, match: RegExpExecArray | null }`

### createIndentationTokenInstance

**Return:** `IToken`

### getLineNumber

**Return:** `number`

### indentMatcher

**Return:** `ReturnType<CustomPatternMatcherFunc>`

### dedentMatcher

**Return:** `ReturnType<CustomPatternMatcherFunc>`

### buildTerminalToken

**Return:** `TokenType`

### flushRemainingDedents

**Return:** `IToken[]`
