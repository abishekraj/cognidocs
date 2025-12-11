# LangiumGrammarReferences
**Extends:** `DefaultReferences`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `documents` | `LangiumDocuments` | - |

## Methods
### findDeclaration
**Return:** `AstNode | undefined`

### findReferences
**Return:** `Stream<ReferenceDescription>`

### findReferencesToTypeAttribute
**Return:** `Stream<ReferenceDescription>`

### createReferencesToAttribute
**Return:** `ReferenceDescription[]`

### findAssignmentDeclaration
**Return:** `AstNode | undefined`

### findActionDeclaration
**Return:** `TypeAttribute | undefined`

### findRulesWithReturnType
**Return:** `Array<ParserRule | Action>`
