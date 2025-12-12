# findLocalReferences

**Return Type:** `Stream<Reference>`

## Parameters

| Name         | Type      | Optional | Description                                                                                                         |
| :----------- | :-------- | :------- | :------------------------------------------------------------------------------------------------------------------ |
| `targetNode` | `AstNode` | No       | AstNode we are looking for                                                                                          |
| `lookup`     | `any`     | No       | AstNode where we search for references. If not provided, the root node of the document is used as the default value |
