# LangiumGrammarValidator
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `references` | `References` | - |
| `nodeLocator` | `AstNodeLocator` | - |
| `documents` | `LangiumDocuments` | - |

## Methods
### checkGrammarName
**Return:** `void`

### checkEntryGrammarRule
**Return:** `void`

### checkUniqueRuleName
**Return:** `void`

### checkUniqueTypeName
**Return:** `void`

### checkUniqueName
**Return:** `void`

### checkDuplicateImportedGrammar
**Return:** `void`

### checkUniqueImportedRules
**Return:** `void`

### getDuplicateExportedRules
**Return:** `Set<string>`

### checkGrammarTypeInfer
**Return:** `void`

### getActionType
**Return:** `ast.AbstractType | undefined`

### checkGrammarHiddenTokens
**Return:** `void`

### checkHiddenTerminalRule
**Return:** `void`

### checkEmptyTerminalRule
**Return:** `void`

### checkEmptyParserRule
**Return:** `void`

### checkInvalidRegexFlags
**Return:** `void`

### checkDirectlyUsedRegexFlags
**Return:** `void`

### getFlagRange
**Return:** `Range | undefined`

### checkUsedHiddenTerminalRule
**Return:** `void`

### checkUsedFragmentTerminalRule
**Return:** `void`

### checkCrossReferenceSyntax
**Return:** `void`

### checkPackageImport
**Return:** `void`

### checkInvalidCharacterRange
**Return:** `void`

### checkGrammarForUnusedRules
**Return:** `void`

### checkClashingTerminalNames
**Return:** `void`

### checkRuleName
**Return:** `void`

### checkMultiRuleCallsAreAssigned
**Return:** `void`

### checkTypeReservedName
**Return:** `void`

### checkAssignmentReservedName
**Return:** `void`

### checkParserRuleReservedName
**Return:** `void`

### checkReservedName
**Return:** `void`

### checkKeyword
**Return:** `void`

### checkUnorderedGroup
**Return:** `void`

### checkRuleParametersUsed
**Return:** `void`

### checkParserRuleDataType
**Return:** `void`

### checkAssignmentToFragmentRule
**Return:** `void`

### checkAssignmentTypes
**Return:** `void`

### checkOperatorMultiplicitiesForMultiAssignments
**Return:** `void`

### checkOperatorMultiplicitiesForMultiAssignmentsIndependent
**Return:** `void`

### checkOperatorMultiplicitiesForMultiAssignmentsNested
**Return:** `boolean`

### checkInterfacePropertyTypes
**Return:** `void`

### createMixedTypeError
**Return:** `void`

### checkTerminalRuleReturnType
**Return:** `void`

### checkRuleCallParameters
**Return:** `void`

### checkCrossRefNameAssignment
**Return:** `void`

### checkCrossRefTerminalType
**Return:** `void`

### checkCrossRefType
**Return:** `void`

### checkCrossReferenceToTypeUnion
**Return:** `void`

### checkFragmentsInTypes
**Return:** `void`

### checkReferenceTypeUnion
**Return:** `void`

### checkReferenceToRuleButNotType
**Return:** `string | undefined`

### checkAssignmentWithFeatureName
**Return:** `void`
