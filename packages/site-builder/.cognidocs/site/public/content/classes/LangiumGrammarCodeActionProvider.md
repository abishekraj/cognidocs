# LangiumGrammarCodeActionProvider

## Properties

| Name           | Type            | Description |
| :------------- | :-------------- | :---------- |
| `reflection`   | `AstReflection` | -           |
| `indexManager` | `IndexManager`  | -           |

## Methods

### getCodeActions

**Return:** `MaybePromise<Array<Command | CodeAction>>`

### createCodeActions

**Return:** `void`

### fixMissingReturns

**Return:** `CodeAction | undefined`

### fixInvalidReturnsInfers

**Return:** `CodeAction | undefined`

### fixMissingInfer

**Return:** `CodeAction | undefined`

### fixSuperfluousInfer

**Return:** `CodeAction | undefined`

### fixUnnecessaryFileExtension

**Return:** `CodeAction`

### makeUpperCase

**Return:** `CodeAction`

### addEntryKeyword

**Return:** `CodeAction | undefined`

### fixRegexTokens

**Return:** `CodeAction | undefined`

### fixCrossRefSyntax

**Return:** `CodeAction`

### fixHiddenTerminals

**Return:** `CodeAction`

### addNewRule

**Return:** `CodeAction | undefined`

### lookInGlobalScope

**Return:** `CodeAction[]`
