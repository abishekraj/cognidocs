# Graph

## Properties

| Name                  | Type        | Description |
| :-------------------- | :---------- | :---------- |
| `_isDirected`         | `any`       | -           |
| `_isMultigraph`       | `any`       | -           |
| `_isCompound`         | `any`       | -           |
| `_label`              | `any`       | -           |
| `_defaultNodeLabelFn` | `() => any` | -           |
| `_defaultEdgeLabelFn` | `() => any` | -           |
| `_nodes`              | `{}`        | -           |
| `_parent`             | `{}`        | -           |
| `_children`           | `{}`        | -           |
| `_in`                 | `{}`        | -           |
| `_preds`              | `{}`        | -           |
| `_out`                | `{}`        | -           |
| `_sucs`               | `{}`        | -           |
| `_edgeObjs`           | `{}`        | -           |
| `_edgeLabels`         | `{}`        | -           |
| `_nodeCount`          | `number`    | -           |
| `_edgeCount`          | `number`    | -           |

## Methods

### isDirected

**Return:** `any`

### isMultigraph

**Return:** `any`

### isCompound

**Return:** `any`

### setGraph

**Return:** `this`

### graph

**Return:** `any`

### setDefaultNodeLabel

**Return:** `this`

### nodeCount

**Return:** `number`

### nodes

**Return:** `string[]`

### sources

**Return:** `string[]`

### sinks

**Return:** `string[]`

### setNodes

**Return:** `this`

### setNode

**Return:** `this`

### node

**Return:** `any`

### hasNode

**Return:** `any`

### removeNode

**Return:** `this`

### setParent

**Return:** `this`

### \_removeFromParentsChildList

**Return:** `void`

### parent

**Return:** `any`

### children

**Return:** `string[]`

### predecessors

**Return:** `string[]`

### successors

**Return:** `string[]`

### neighbors

**Return:** `string[]`

### isLeaf

**Return:** `boolean`

### filterNodes

**Return:** `any`

### setDefaultEdgeLabel

**Return:** `this`

### edgeCount

**Return:** `number`

### edges

**Return:** `any[]`

### setPath

**Return:** `this`

### setEdge

**Return:** `this`

### edge

**Return:** `any`

### hasEdge

**Return:** `any`

### removeEdge

**Return:** `this`

### inEdges

**Return:** `any[]`

### outEdges

**Return:** `any[]`

### nodeEdges

**Return:** `any[]`
