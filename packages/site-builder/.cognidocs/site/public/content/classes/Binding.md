# Binding

This class is responsible for a binding inside of a scope. It tracks the following: * Node path. * Amount of times referenced by other nodes. * Paths to nodes that reassign or modify this binding. * The kind of binding. (Is it a parameter, declaration etc)

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `identifier` | `t.Identifier` | - |
| `scope` | `Scope` | - |
| `path` | `NodePath` | - |
| `kind` | `BindingKind` | - |
| `referenced` | `boolean` | - |
| `references` | `number` | - |
| `referencePaths` | `NodePath[]` | - |
| `constant` | `boolean` | - |
| `constantViolations` | `NodePath[]` | - |
| `hasDeoptedValue` | `boolean` | - |
| `hasValue` | `boolean` | - |
| `value` | `any` | - |

## Methods
### deopValue
**Return:** `void`

### setValue
**Return:** `void`

### clearValue
**Return:** `void`

### reassign
**Return:** `void`

### reference
**Return:** `void`

### dereference
**Return:** `void`
