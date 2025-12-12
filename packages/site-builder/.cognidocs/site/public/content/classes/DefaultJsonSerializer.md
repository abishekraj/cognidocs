# DefaultJsonSerializer

## Properties

| Name               | Type                           | Description |
| :----------------- | :----------------------------- | :---------- |
| `ignoreProperties` | `any`                          | -           |
| `currentDocument`  | `LangiumDocument \| undefined` | -           |
| `langiumDocuments` | `LangiumDocuments`             | -           |
| `astNodeLocator`   | `AstNodeLocator`               | -           |
| `nameProvider`     | `NameProvider`                 | -           |
| `commentProvider`  | `CommentProvider`              | -           |

## Methods

### serialize

**Return:** `string`

### deserialize

**Return:** `T`

### replacer

**Return:** `unknown`

### addAstNodeRegionWithAssignmentsTo

**Return:** `void`

### linkNode

**Return:** `void`

### reviveReference

**Return:** `Reference | undefined`

### getRefNode

**Return:** `AstNode | string`
