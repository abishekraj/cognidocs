# Lexer
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `SKIPPED` | `string` | - |
| `NA` | `RegExp` | - |
| `lexerDefinitionErrors` | `ILexerDefinitionError[]` | - |

## Methods
### tokenize

Will lex(Tokenize) a string. Note that this can be called repeatedly on different strings as this method does not modify the state of the Lexer.

**Return:** `ILexingResult`
