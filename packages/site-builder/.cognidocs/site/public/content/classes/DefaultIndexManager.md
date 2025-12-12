# DefaultIndexManager

## Properties

| Name                | Type               | Description |
| :------------------ | :----------------- | :---------- |
| `serviceRegistry`   | `ServiceRegistry`  | -           |
| `documents`         | `LangiumDocuments` | -           |
| `astReflection`     | `AstReflection`    | -           |
| `symbolIndex`       | `any`              | -           |
| `symbolByTypeIndex` | `any`              | -           |
| `referenceIndex`    | `any`              | -           |

## Methods

### findAllReferences

**Return:** `Stream<ReferenceDescription>`

### allElements

**Return:** `Stream<AstNodeDescription>`

### getFileDescriptions

**Return:** `AstNodeDescription[]`

### remove

**Return:** `void`

### updateContent

**Return:** `Promise<void>`

### updateReferences

**Return:** `Promise<void>`

### isAffected

**Return:** `boolean`
