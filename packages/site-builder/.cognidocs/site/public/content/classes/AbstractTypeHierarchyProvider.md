# AbstractTypeHierarchyProvider

## Properties

| Name            | Type               | Description |
| :-------------- | :----------------- | :---------- |
| `grammarConfig` | `GrammarConfig`    | -           |
| `nameProvider`  | `NameProvider`     | -           |
| `documents`     | `LangiumDocuments` | -           |
| `references`    | `References`       | -           |

## Methods

### prepareTypeHierarchy

**Return:** `MaybePromise<TypeHierarchyItem[] | undefined>`

### getTypeHierarchyItems

**Return:** `TypeHierarchyItem[] | undefined`

### getTypeHierarchyItem

**Return:** `Partial<TypeHierarchyItem> | undefined`

### supertypes

**Return:** `Promise<TypeHierarchyItem[] | undefined>`

### getSupertypes

**Return:** `MaybePromise<TypeHierarchyItem[] | undefined>`

### subtypes

**Return:** `Promise<TypeHierarchyItem[] | undefined>`

### getSubtypes

**Return:** `MaybePromise<TypeHierarchyItem[] | undefined>`
