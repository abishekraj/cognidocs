# FlowDB
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `vertexCounter` | `any` | - |
| `config` | `any` | - |
| `vertices` | `any` | - |
| `edges` | `any` | - |
| `classes` | `any` | - |
| `subGraphs` | `any` | - |
| `subGraphLookup` | `any` | - |
| `tooltips` | `any` | - |
| `subCount` | `any` | - |
| `firstGraphFlag` | `any` | - |
| `direction` | `any` | - |
| `version` | `any` | - |
| `secCount` | `any` | - |
| `posCrossRef` | `any` | - |
| `funs` | `any` | - |
| `sanitizeText` | `any` | - |
| `isLinkData` | `any` | - |
| `setClickFun` | `any` | - |
| `setupToolTips` | `any` | - |
| `getPosForId` | `any` | - |
| `indexNodes2` | `any` | - |
| `destructStartLink` | `any` | - |
| `countChar` | `any` | - |
| `destructEndLink` | `any` | - |
| `lex` | `{
        firstGraph: typeof FlowDB.prototype.firstGraph;
    }` | - |
| `getTypeFromVertex` | `any` | - |
| `findNode` | `any` | - |
| `destructEdgeType` | `any` | - |
| `addNodeFromVertex` | `any` | - |
| `getCompiledStyles` | `any` | - |
| `setAccTitle` | `(txt: string) => void` | - |
| `setAccDescription` | `(txt: string) => void` | - |
| `setDiagramTitle` | `(txt: string) => void` | - |
| `getAccTitle` | `() => string` | - |
| `getAccDescription` | `() => string` | - |
| `getDiagramTitle` | `() => string` | - |

## Methods
### lookUpDomId

Function to lookup domId from id in the graph definition.

**Return:** `string`

### addVertex

Function called by parser when a node definition has been found

**Return:** `void`

### addSingleLink

Function called by parser when a link/edge definition has been found

**Return:** `void`

### addLink
**Return:** `void`

### updateLinkInterpolate

Updates a link's line interpolation algorithm

**Return:** `void`

### updateLink

Updates a link with a style

**Return:** `void`

### addClass
**Return:** `void`

### setDirection

Called by parser when a graph definition is found, stores the direction of the chart.

**Return:** `void`

### setClass

Called by parser when a special node is found, e.g. a clickable element.

**Return:** `void`

### setTooltip
**Return:** `void`

### setLink

Called by parser when a link is found. Adds the URL to the vertex data.

**Return:** `void`

### getTooltip
**Return:** `string | undefined`

### setClickEvent

Called by parser when a click definition is found. Registers an event handler.

**Return:** `void`

### bindFunctions
**Return:** `void`

### getDirection
**Return:** `string | undefined`

### getVertices

Retrieval function for fetching the found nodes after parsing has completed.

**Return:** `Map<string, FlowVertex>`

### getEdges

Retrieval function for fetching the found links after parsing has completed.

**Return:** `FlowEdge[] & {
        defaultInterpolate?: string;
        defaultStyle?: string[];
    }`

### getClasses

Retrieval function for fetching the found class definitions after parsing has completed.

**Return:** `Map<string, FlowClass>`

### clear

Clears the internal graph db so that a new graph can be parsed.

**Return:** `void`

### setGen
**Return:** `void`

### defaultStyle
**Return:** `string`

### addSubGraph
**Return:** `string`

### getDepthFirstPos
**Return:** `number`

### indexNodes
**Return:** `void`

### getSubGraphs
**Return:** `FlowSubGraph[]`

### firstGraph
**Return:** `boolean`

### destructLink
**Return:** `FlowLink | {
        type: string;
        stroke: string;
        length: number;
    }`

### exists
**Return:** `boolean`

### makeUniq

Deletes an id from all subgraphs

**Return:** `{
        nodes: string[];
    }`

### getData
**Return:** `{
        nodes: Node[];
        edges: Edge[];
        other: {};
        config: import("../../config.type.js").MermaidConfig;
    }`

### defaultConfig
**Return:** `import("../../config.type.js").FlowchartDiagramConfig | undefined`
