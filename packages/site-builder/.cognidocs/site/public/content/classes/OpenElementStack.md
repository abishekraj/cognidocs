# OpenElementStack

## Properties

| Name                    | Type                           | Description |
| :---------------------- | :----------------------------- | :---------- |
| `treeAdapter`           | `any`                          | -           |
| `handler`               | `any`                          | -           |
| `items`                 | `T['parentNode'][]`            | -           |
| `tagIDs`                | `$[]`                          | -           |
| `current`               | `T['parentNode'] \| undefined` | -           |
| `stackTop`              | `number`                       | -           |
| `tmplCount`             | `number`                       | -           |
| `currentTagId`          | `number \| undefined`          | -           |
| `_indexOf`              | `any`                          | -           |
| `_isInTemplate`         | `any`                          | -           |
| `_updateCurrentElement` | `any`                          | -           |
| `popUntilPopped`        | `any`                          | -           |
| `_indexOfTagNames`      | `any`                          | -           |
| `clearBackTo`           | `any`                          | -           |
| `hasInDynamicScope`     | `any`                          | -           |

## Methods

### push

**Return:** `void`

### pop

**Return:** `void`

### replace

**Return:** `void`

### insertAfter

**Return:** `void`

### popUntilTagNamePopped

**Return:** `void`

### shortenToLength

**Return:** `void`

### popUntilElementPopped

**Return:** `void`

### popUntilNumberedHeaderPopped

**Return:** `void`

### popUntilTableCellPopped

**Return:** `void`

### popAllUpToHtmlElement

**Return:** `void`

### clearBackToTableContext

**Return:** `void`

### clearBackToTableBodyContext

**Return:** `void`

### clearBackToTableRowContext

**Return:** `void`

### remove

**Return:** `void`

### tryPeekProperlyNestedBodyElement

**Return:** `T['element'] | null`

### contains

**Return:** `boolean`

### getCommonAncestor

**Return:** `T['element'] | null`

### isRootHtmlElementCurrent

**Return:** `boolean`

### hasInScope

**Return:** `boolean`

### hasInListItemScope

**Return:** `boolean`

### hasInButtonScope

**Return:** `boolean`

### hasNumberedHeaderInScope

**Return:** `boolean`

### hasInTableScope

**Return:** `boolean`

### hasTableBodyContextInTableScope

**Return:** `boolean`

### hasInSelectScope

**Return:** `boolean`

### generateImpliedEndTags

**Return:** `void`

### generateImpliedEndTagsThoroughly

**Return:** `void`

### generateImpliedEndTagsWithExclusion

**Return:** `void`
