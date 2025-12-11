# ClassDB
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `relations` | `any` | - |
| `classes` | `any` | - |
| `styleClasses` | `any` | - |
| `notes` | `any` | - |
| `interfaces` | `any` | - |
| `namespaces` | `any` | - |
| `namespaceCounter` | `any` | - |
| `functions` | `any` | - |
| `splitClassNameAndType` | `any` | - |
| `addInterface` | `any` | - |
| `setClickFunc` | `any` | - |
| `lineType` | `{
        LINE: number;
        DOTTED_LINE: number;
    }` | - |
| `relationType` | `{
        AGGREGATION: number;
        EXTENSION: number;
        COMPOSITION: number;
        DEPENDENCY: number;
        LOLLIPOP: number;
    }` | - |
| `setupToolTips` | `any` | - |
| `direction` | `any` | - |
| `getArrowMarker` | `any` | - |
| `setAccTitle` | `(txt: string) => void` | - |
| `getAccTitle` | `() => string` | - |
| `setAccDescription` | `(txt: string) => void` | - |
| `getAccDescription` | `() => string` | - |
| `setDiagramTitle` | `(txt: string) => void` | - |
| `getDiagramTitle` | `() => string` | - |
| `getConfig` | `() => import("../../config.type.js").ClassDiagramConfig \| undefined` | - |

## Methods
### setClassLabel
**Return:** `void`

### addClass

Function called by parser when a node definition has been found.

**Return:** `void`

### lookUpDomId

Function to lookup domId from id in the graph definition.

**Return:** `string`

### clear
**Return:** `void`

### getClass
**Return:** `ClassNode`

### getClasses
**Return:** `ClassMap`

### getRelations
**Return:** `ClassRelation[]`

### getNotes
**Return:** `ClassNote[]`

### addRelation
**Return:** `void`

### addAnnotation

Adds an annotation to the specified class Annotations mark special properties of the given type (like 'interface' or 'service')

**Return:** `void`

### addMember

Adds a member to the specified class

**Return:** `void`

### addMembers
**Return:** `void`

### addNote
**Return:** `void`

### cleanupLabel
**Return:** `string`

### setCssClass

Called by parser when assigning cssClass to a class

**Return:** `void`

### defineClass
**Return:** `void`

### setTooltip

Called by parser when a tooltip is found, e.g. a clickable element.

**Return:** `void`

### getTooltip
**Return:** `string | undefined`

### setLink

Called by parser when a link is found. Adds the URL to the vertex data.

**Return:** `void`

### setClickEvent

Called by parser when a click definition is found. Registers an event handler.

**Return:** `void`

### bindFunctions
**Return:** `void`

### getDirection
**Return:** `string`

### setDirection
**Return:** `void`

### addNamespace

Function called by parser when a namespace definition has been found.

**Return:** `void`

### getNamespace
**Return:** `NamespaceNode`

### getNamespaces
**Return:** `NamespaceMap`

### addClassesToNamespace

Function called by parser when a namespace definition has been found.

**Return:** `void`

### setCssStyle
**Return:** `void`

### getData
**Return:** `{
        nodes: Node[];
        edges: Edge[];
        other: {};
        config: import("../../config.type.js").MermaidConfig;
        direction: string;
    }`
