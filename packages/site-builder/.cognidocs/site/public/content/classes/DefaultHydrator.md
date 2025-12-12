# DefaultHydrator

## Properties

| Name                  | Type      | Description |
| :-------------------- | :-------- | :---------- |
| `grammar`             | `Grammar` | -           |
| `lexer`               | `Lexer`   | -           |
| `linker`              | `Linker`  | -           |
| `grammarElementIdMap` | `any`     | -           |
| `tokenTypeIdMap`      | `any`     | -           |

## Methods

### dehydrate

**Return:** `ParseResult<object>`

### dehydrateLexerReport

**Return:** `LexingReport`

### createDehyrationContext

**Return:** `DehydrateContext`

### dehydrateAstNode

**Return:** `object`

### dehydrateReference

**Return:** `any`

### dehydrateCstNode

**Return:** `any`

### hydrate

**Return:** `ParseResult<T>`

### createHydrationContext

**Return:** `HydrateContext`

### hydrateAstNode

**Return:** `AstNode`

### setParent

**Return:** `any`

### hydrateReference

**Return:** `Reference`

### hydrateCstNode

**Return:** `CstNode`

### hydrateCstLeafNode

**Return:** `LeafCstNode`

### getTokenType

**Return:** `TokenType`

### getGrammarElementId

**Return:** `number | undefined`

### getGrammarElement

**Return:** `AbstractElement | undefined`

### createGrammarElementIdMap

**Return:** `void`
