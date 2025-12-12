# ErDB

## Properties

| Name                | Type                                                                | Description |
| :------------------ | :------------------------------------------------------------------ | :---------- |
| `entities`          | `any`                                                               | -           |
| `relationships`     | `any`                                                               | -           |
| `classes`           | `any`                                                               | -           |
| `direction`         | `any`                                                               | -           |
| `Cardinality`       | `any`                                                               | -           |
| `Identification`    | `any`                                                               | -           |
| `getCompiledStyles` | `any`                                                               | -           |
| `setAccTitle`       | `(txt: string) => void`                                             | -           |
| `getAccTitle`       | `() => string`                                                      | -           |
| `setAccDescription` | `(txt: string) => void`                                             | -           |
| `getAccDescription` | `() => string`                                                      | -           |
| `setDiagramTitle`   | `(txt: string) => void`                                             | -           |
| `getDiagramTitle`   | `() => string`                                                      | -           |
| `getConfig`         | `() => import("../../config.type.js").ErDiagramConfig \| undefined` | -           |

## Methods

### addEntity

Add entity

**Return:** `EntityNode`

### getEntity

**Return:** `EntityNode | undefined`

### getEntities

**Return:** `Map<string, EntityNode>`

### getClasses

**Return:** `Map<string, EntityClass>`

### addAttributes

**Return:** `void`

### addRelationship

Add a relationship

**Return:** `void`

### getRelationships

**Return:** `Relationship[]`

### getDirection

**Return:** `string`

### setDirection

**Return:** `void`

### addCssStyles

**Return:** `void`

### addClass

**Return:** `void`

### setClass

**Return:** `void`

### clear

**Return:** `void`

### getData

**Return:** `{
        nodes: Node[];
        edges: Edge[];
        other: {};
        config: import("../../config.type.js").MermaidConfig;
        direction: string;
    }`
