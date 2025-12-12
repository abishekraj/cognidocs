# DefaultLinker

## Properties

| Name               | Type                     | Description |
| :----------------- | :----------------------- | :---------- |
| `reflection`       | `AstReflection`          | -           |
| `scopeProvider`    | `ScopeProvider`          | -           |
| `astNodeLocator`   | `AstNodeLocator`         | -           |
| `langiumDocuments` | `() => LangiumDocuments` | -           |

## Methods

### link

**Return:** `Promise<void>`

### doLink

**Return:** `void`

### unlink

**Return:** `void`

### getCandidate

**Return:** `AstNodeDescription | LinkingError`

### buildReference

**Return:** `Reference`

### getLinkedNode

**Return:** `{ node?: AstNode, descr?: AstNodeDescription, error?: LinkingError }`

### loadAstNode

**Return:** `AstNode | undefined`

### createLinkingError

**Return:** `LinkingError`
