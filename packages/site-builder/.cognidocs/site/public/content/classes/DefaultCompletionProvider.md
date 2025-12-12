# DefaultCompletionProvider

## Properties

| Name                    | Type                        | Description |
| :---------------------- | :-------------------------- | :---------- |
| `completionParser`      | `LangiumCompletionParser`   | -           |
| `documentationProvider` | `DocumentationProvider`     | -           |
| `scopeProvider`         | `ScopeProvider`             | -           |
| `grammar`               | `ast.Grammar`               | -           |
| `nameProvider`          | `NameProvider`              | -           |
| `lexer`                 | `Lexer`                     | -           |
| `nodeKindProvider`      | `NodeKindProvider`          | -           |
| `fuzzyMatcher`          | `FuzzyMatcher`              | -           |
| `grammarConfig`         | `GrammarConfig`             | -           |
| `astReflection`         | `AstReflection`             | -           |
| `completionOptions`     | `CompletionProviderOptions` | -           |

## Methods

### getCompletion

**Return:** `Promise<CompletionList | undefined>`

### deduplicateItems

**Return:** `CompletionItem[]`

### findFeaturesAt

**Return:** `NextFeature[]`

### buildContexts

**Return:** `IterableIterator<CompletionContext>`

### performNextTokenCompletion

**Return:** `boolean`

### findDataTypeRuleStart

**Return:** `[number, number] | undefined`

### continueCompletion

**Return:** `boolean`

### backtrackToAnyToken

**Return:** `CompletionBacktrackingInformation`

### completionFor

**Return:** `MaybePromise<void>`

### completionForCrossReference

**Return:** `MaybePromise<void>`

### getReferenceCandidates

**Return:** `Stream<AstNodeDescription>`

### createReferenceCompletionItem

**Return:** `CompletionValueItem`

### getReferenceDocumentation

**Return:** `MarkupContent | string | undefined`

### completionForKeyword

**Return:** `MaybePromise<void>`

### getKeywordCompletionItemKind

**Return:** `CompletionItemKind`

### filterKeyword

**Return:** `boolean`

### fillCompletionItem

**Return:** `CompletionItem | undefined`

### buildCompletionTextEdit

**Return:** `TextEdit | undefined`
