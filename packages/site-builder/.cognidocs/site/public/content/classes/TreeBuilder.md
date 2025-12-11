# TreeBuilder

This trait is responsible for the CST building logic.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `outputCst` | `boolean` | - |
| `CST_STACK` | `CstNode[]` | - |
| `baseCstVisitorConstructor` | `Function` | - |
| `baseCstVisitorWithDefaultsConstructor` | `Function` | - |
| `setNodeLocationFromNode` | `(
    nodeLocation: CstNodeLocation,
    locationInformation: CstNodeLocation,
  ) => void` | - |
| `setNodeLocationFromToken` | `(
    nodeLocation: CstNodeLocation,
    locationInformation: CstNodeLocation,
  ) => void` | - |
| `cstPostRule` | `(this: MixedInParser, ruleCstNode: CstNode) => void` | - |
| `setInitialNodeLocation` | `(cstNode: CstNode) => void` | - |
| `nodeLocationTracking` | `nodeLocationTrackingOptions` | - |

## Methods
### initTreeBuilder
**Return:** `void`

### setInitialNodeLocationOnlyOffsetRecovery
**Return:** `void`

### setInitialNodeLocationOnlyOffsetRegular
**Return:** `void`

### setInitialNodeLocationFullRecovery
**Return:** `void`

### setInitialNodeLocationFullRegular
**Return:** `void`

### cstInvocationStateUpdate
**Return:** `void`

### cstFinallyStateUpdate
**Return:** `void`

### cstPostRuleFull
**Return:** `void`

### cstPostRuleOnlyOffset
**Return:** `void`

### cstPostTerminal
**Return:** `void`

### cstPostNonTerminal
**Return:** `void`

### getBaseCstVisitorConstructor
**Return:** `{
    new (...args: any[]): ICstVisitor<IN, OUT>;
  }`

### getBaseCstVisitorConstructorWithDefaults
**Return:** `{
    new (...args: any[]): ICstVisitor<IN, OUT>;
  }`

### getLastExplicitRuleShortName
**Return:** `number`

### getPreviousExplicitRuleShortName
**Return:** `number`

### getLastExplicitRuleOccurrenceIndex
**Return:** `number`
