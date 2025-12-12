# ArchitectureDB

## Properties

| Name                | Type                    | Description |
| :------------------ | :---------------------- | :---------- |
| `nodes`             | `any`                   | -           |
| `groups`            | `any`                   | -           |
| `edges`             | `any`                   | -           |
| `registeredIds`     | `any`                   | -           |
| `dataStructures`    | `any`                   | -           |
| `elements`          | `any`                   | -           |
| `setAccTitle`       | `(txt: string) => void` | -           |
| `getAccTitle`       | `() => string`          | -           |
| `setDiagramTitle`   | `(txt: string) => void` | -           |
| `getDiagramTitle`   | `() => string`          | -           |
| `getAccDescription` | `() => string`          | -           |
| `setAccDescription` | `(txt: string) => void` | -           |

## Methods

### clear

**Return:** `void`

### addService

**Return:** `void`

### getServices

**Return:** `ArchitectureService[]`

### addJunction

**Return:** `void`

### getJunctions

**Return:** `ArchitectureJunction[]`

### getNodes

**Return:** `ArchitectureNode[]`

### getNode

**Return:** `ArchitectureNode | null`

### addGroup

**Return:** `void`

### getGroups

**Return:** `ArchitectureGroup[]`

### addEdge

**Return:** `void`

### getEdges

**Return:** `ArchitectureEdge[]`

### getDataStructures

Returns the current diagram's adjacency list, spatial map, & group alignments. If they have not been created, run the algorithms to generate them.

**Return:** `import("./architectureTypes.js").ArchitectureDataStructures`

### setElementForId

**Return:** `void`

### getElementById

**Return:** `D3Element`

### getConfig

**Return:** `Required<ArchitectureDiagramConfig>`

### getConfigField

**Return:** `Required<ArchitectureDiagramConfig>[T]`
