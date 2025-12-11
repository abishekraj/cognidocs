# MindmapDB
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `nodes` | `any` | - |
| `count` | `any` | - |
| `elements` | `any` | - |
| `baseLevel` | `any` | - |
| `nodeType` | `typeof nodeType` | - |

## Methods
### clear
**Return:** `void`

### getParent
**Return:** `MindmapNode | null`

### getMindmap
**Return:** `MindmapNode | null`

### addNode
**Return:** `void`

### getType
**Return:** `0 | 2 | 1 | 3 | 4 | 5 | 6`

### setElementForId
**Return:** `void`

### getElementById
**Return:** `any`

### decorateNode
**Return:** `void`

### type2Str
**Return:** `string`

### assignSections

Assign section numbers to nodes based on their position relative to root

**Return:** `void`

### flattenNodes

Convert mindmap tree structure to flat array of nodes

**Return:** `void`

### generateEdges

Generate edges from parent-child relationships in mindmap tree

**Return:** `void`

### getData

Get structured data for layout algorithms Following the pattern established by ER diagrams

**Return:** `LayoutData`

### getLogger
**Return:** `Record<import("../../logger.js").LogLevel, {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    }>`
