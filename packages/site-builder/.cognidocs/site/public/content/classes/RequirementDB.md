# RequirementDB
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `relations` | `any` | - |
| `latestRequirement` | `any` | - |
| `requirements` | `any` | - |
| `latestElement` | `any` | - |
| `elements` | `any` | - |
| `classes` | `any` | - |
| `direction` | `any` | - |
| `RequirementType` | `any` | - |
| `RiskLevel` | `any` | - |
| `VerifyType` | `any` | - |
| `Relationships` | `any` | - |
| `resetLatestRequirement` | `any` | - |
| `resetLatestElement` | `any` | - |
| `getInitialRequirement` | `any` | - |
| `getInitialElement` | `any` | - |
| `setAccTitle` | `(txt: string) => void` | - |
| `getAccTitle` | `() => string` | - |
| `setAccDescription` | `(txt: string) => void` | - |
| `getAccDescription` | `() => string` | - |
| `setDiagramTitle` | `(txt: string) => void` | - |
| `getDiagramTitle` | `() => string` | - |
| `getConfig` | `() => import("../../config.type.js").RequirementDiagramConfig \| undefined` | - |

## Methods
### getDirection
**Return:** `string`

### setDirection
**Return:** `void`

### addRequirement
**Return:** `Requirement | undefined`

### getRequirements
**Return:** `Map<string, Requirement>`

### setNewReqId
**Return:** `void`

### setNewReqText
**Return:** `void`

### setNewReqRisk
**Return:** `void`

### setNewReqVerifyMethod
**Return:** `void`

### addElement
**Return:** `Element | undefined`

### getElements
**Return:** `Map<string, Element>`

### setNewElementType
**Return:** `void`

### setNewElementDocRef
**Return:** `void`

### addRelationship
**Return:** `void`

### getRelationships
**Return:** `Relation[]`

### clear
**Return:** `void`

### setCssStyle
**Return:** `void`

### setClass
**Return:** `void`

### defineClass
**Return:** `void`

### getClasses
**Return:** `Map<string, RequirementClass>`

### getData
**Return:** `{
        nodes: Node[];
        edges: Edge[];
        other: {};
        config: import("../../config.type.js").MermaidConfig;
        direction: string;
    }`
