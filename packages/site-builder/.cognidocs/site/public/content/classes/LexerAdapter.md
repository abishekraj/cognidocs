# LexerAdapter

Trait responsible abstracting over the interaction with Lexer output (Token vector). This could be generalized to support other kinds of lexers, e.g. - Just in Time Lexing / Lexer-Less parsing. - Streaming Lexer.

## Properties

| Name              | Type       | Description |
| :---------------- | :--------- | :---------- |
| `tokVector`       | `IToken[]` | -           |
| `tokVectorLength` | `number`   | -           |
| `currIdx`         | `number`   | -           |

## Methods

### initLexerAdapter

**Return:** `void`

### SKIP_TOKEN

**Return:** `IToken`

### LA

**Return:** `IToken`

### consumeToken

**Return:** `void`

### exportLexerState

**Return:** `number`

### importLexerState

**Return:** `void`

### resetLexerState

**Return:** `void`

### moveToTerminatedState

**Return:** `void`

### getLexerPosition

**Return:** `number`
