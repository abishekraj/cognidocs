# TreeMapDB
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `nodes` | `any` | - |
| `levels` | `any` | - |
| `outerNodes` | `any` | - |
| `classes` | `any` | - |
| `root` | `any` | - |
| `setAccTitle` | `(txt: string) => void` | - |
| `getAccTitle` | `() => string` | - |
| `setDiagramTitle` | `(txt: string) => void` | - |
| `getDiagramTitle` | `() => string` | - |
| `getAccDescription` | `() => string` | - |
| `setAccDescription` | `(txt: string) => void` | - |

## Methods
### getNodes
**Return:** `TreemapNode[]`

### getConfig
**Return:** `Required<TreemapDiagramConfig>`

### addNode
**Return:** `void`

### getRoot
**Return:** `{
        name: string;
        children: TreemapNode[];
    }`

### addClass
**Return:** `void`

### getClasses
**Return:** `Map<string, DiagramStyleClassDef>`

### getStylesForClass
**Return:** `string[]`

### clear
**Return:** `void`
