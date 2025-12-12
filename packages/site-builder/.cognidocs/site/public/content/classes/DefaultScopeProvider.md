# DefaultScopeProvider

## Properties

| Name               | Type                            | Description |
| :----------------- | :------------------------------ | :---------- |
| `reflection`       | `AstReflection`                 | -           |
| `nameProvider`     | `NameProvider`                  | -           |
| `descriptions`     | `AstNodeDescriptionProvider`    | -           |
| `indexManager`     | `IndexManager`                  | -           |
| `globalScopeCache` | `WorkspaceCache<string, Scope>` | -           |

## Methods

### getScope

**Return:** `Scope`

### createScope

**Return:** `Scope`

### createScopeForNodes

**Return:** `Scope`

### getGlobalScope

**Return:** `Scope`
