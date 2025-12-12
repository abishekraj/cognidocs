# AbstractCallHierarchyProvider

## Properties

| Name            | Type               | Description |
| :-------------- | :----------------- | :---------- |
| `grammarConfig` | `GrammarConfig`    | -           |
| `nameProvider`  | `NameProvider`     | -           |
| `documents`     | `LangiumDocuments` | -           |
| `references`    | `References`       | -           |

## Methods

### prepareCallHierarchy

**Return:** `MaybePromise<CallHierarchyItem[] | undefined>`

### getCallHierarchyItems

**Return:** `CallHierarchyItem[] | undefined`

### getCallHierarchyItem

**Return:** `Partial<CallHierarchyItem> | undefined`

### incomingCalls

**Return:** `Promise<CallHierarchyIncomingCall[] | undefined>`

### getIncomingCalls

**Return:** `MaybePromise<CallHierarchyIncomingCall[] | undefined>`

### outgoingCalls

**Return:** `Promise<CallHierarchyOutgoingCall[] | undefined>`

### getOutgoingCalls

**Return:** `MaybePromise<CallHierarchyOutgoingCall[] | undefined>`
