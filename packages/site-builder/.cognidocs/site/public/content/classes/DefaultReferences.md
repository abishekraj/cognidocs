# DefaultReferences

## Properties

| Name           | Type             | Description |
| :------------- | :--------------- | :---------- |
| `nameProvider` | `NameProvider`   | -           |
| `index`        | `IndexManager`   | -           |
| `nodeLocator`  | `AstNodeLocator` | -           |

## Methods

### findDeclaration

**Return:** `AstNode | undefined`

### findDeclarationNode

**Return:** `CstNode | undefined`

### findReferences

**Return:** `Stream<ReferenceDescription>`

### getReferenceToSelf

**Return:** `ReferenceDescription | undefined`
