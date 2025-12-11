# Scope
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `uid` | `number` | - |
| `path` | `NodePath` | - |
| `block` | `Node` | - |
| `labels` | `Map<string, NodePath<t.LabeledStatement>>` | - |
| `parentBlock` | `Node` | - |
| `parent` | `Scope` | - |
| `hub` | `HubInterface` | - |
| `bindings` | `{ [name: string]: Binding }` | - |
| `references` | `{ [name: string]: true }` | - |
| `globals` | `{ [name: string]: t.Identifier \| t.JSXIdentifier }` | - |
| `uids` | `{ [name: string]: boolean }` | - |
| `data` | `Record<string \| symbol, unknown>` | - |
| `crawling` | `boolean` | - |
| `globals` | `string[]` | - |
| `contextVariables` | `string[]` | - |

## Methods
### traverse
**Return:** `void`

### traverse
**Return:** `void`

### generateDeclaredUidIdentifier
**Return:** `t.Identifier`

### generateUidIdentifier
**Return:** `t.Identifier`

### generateUid
**Return:** `string`

### generateUidIdentifierBasedOnNode
**Return:** `t.Identifier`

### isStatic

Determine whether evaluating the specific input `node` is a consequenceless reference. ie. evaluating it wont result in potentially arbitrary code from being ran. The following are whitelisted and determined not to cause side effects: - `this` expressions - `super` expressions - Bound identifiers

**Return:** `boolean`

### maybeGenerateMemoised
**Return:** `t.Identifier`

### checkBlockScopedCollisions
**Return:** `void`

### rename
**Return:** `void`

### dump
**Return:** `void`

### toArray
**Return:** `t.ArrayExpression | t.CallExpression | t.Identifier`

### hasLabel
**Return:** `boolean`

### getLabel
**Return:** `NodePath<t.LabeledStatement> | undefined`

### registerLabel
**Return:** `void`

### registerDeclaration
**Return:** `void`

### buildUndefinedNode
**Return:** `t.UnaryExpression`

### registerConstantViolation
**Return:** `void`

### registerBinding
**Return:** `void`

### addGlobal
**Return:** `void`

### hasUid
**Return:** `boolean`

### hasGlobal
**Return:** `boolean`

### hasReference
**Return:** `boolean`

### isPure
**Return:** `boolean`

### setData

Set some arbitrary data on the current scope.

**Return:** `any`

### getData

Recursively walk up scope tree looking for the data `key`.

**Return:** `any`

### removeData

Recursively walk up scope tree looking for the data `key` and if it exists, remove it.

**Return:** `void`

### crawl
**Return:** `void`

### push
**Return:** `void`

### getProgramParent
**Return:** `Scope`

### getFunctionParent
**Return:** `Scope | null`

### getBlockParent

Walk up the scope tree until we hit either a BlockStatement/Loop/Program/Function/Switch or reach the very top and hit Program.

**Return:** `Scope`

### getPatternParent

Walk up from a pattern scope (function param initializer) until we hit a non-pattern scope, then returns its block parent

**Return:** `Scope`

### getAllBindings
**Return:** `Record<string, Binding>`

### getAllBindingsOfKind
**Return:** `Record<string, Binding>`

### bindingIdentifierEquals
**Return:** `boolean`

### getBinding
**Return:** `Binding | undefined`

### getOwnBinding
**Return:** `Binding | undefined`

### getBindingIdentifier
**Return:** `t.Identifier`

### getOwnBindingIdentifier
**Return:** `t.Identifier`

### hasOwnBinding
**Return:** `boolean`

### hasBinding
**Return:** `boolean`

### parentHasBinding
**Return:** `boolean`

### moveBindingTo
**Return:** `void`

### removeOwnBinding
**Return:** `void`

### removeBinding
**Return:** `void`
