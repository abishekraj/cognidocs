# StateDB

## Properties

| Name              | Type  | Description |
| :---------------- | :---- | :---------- |
| `version`         | `any` | -           |
| `nodes`           | `any` | -           |
| `edges`           | `any` | -           |
| `rootDoc`         | `any` | -           |
| `classes`         | `any` | -           |
| `documents`       | `any` | -           |
| `currentDocument` | `any` | -           |
| `startEndCount`   | `any` | -           |
| `dividerCnt`      | `any` | -           |
| `links`           | `any` | -           |
| `relationType`    | `{    |

        readonly AGGREGATION: 0;
        readonly EXTENSION: 1;
        readonly COMPOSITION: 2;
        readonly DEPENDENCY: 3;
    }` | - |

| `handleStyleDef` | `any` | - |
| `getRootDocV2` | `any` | - |
| `getDirectionStatement` | `any` | - |
| `getAccTitle` | `() => string` | - |
| `setAccTitle` | `(txt: string) => void` | - |
| `getAccDescription` | `() => string` | - |
| `setAccDescription` | `(txt: string) => void` | - |
| `setDiagramTitle` | `(txt: string) => void` | - |
| `getDiagramTitle` | `() => string` | - |

## Methods

### extract

Convert all of the statements (stmts) that were parsed into states and relationships. This is done because a state diagram may have nested sections, where each section is a 'document' and has its own set of statements. Ex: the section within a fork has its own statements, and incoming and outgoing statements refer to the fork as a whole (document). See the parser grammar: the definition of a document is a document then a 'line', where a line can be a statement. This will push the statement into the list of statements for the current document.

**Return:** `void`

### setRootDoc

**Return:** `void`

### docTranslator

**Return:** `void`

### addState

Function called by parser when a node definition has been found.

**Return:** `void`

### clear

**Return:** `void`

### getState

**Return:** `StateStmt | undefined`

### getStates

**Return:** `Map<string, StateStmt>`

### logDocuments

**Return:** `void`

### getRelations

**Return:** `DiagramEdge[]`

### addLink

Adds a clickable link to a state.

**Return:** `void`

### getLinks

Get all registered links.

**Return:** `Map<string, {
        url: string;
        tooltip: string;
    }>`

### startIdIfNeeded

If the id is a start node ( [*] ), then return a new id constructed from the start node name and the current start node count. else return the given id

**Return:** `string`

### startTypeIfNeeded

If the id is a start node ( [*] ), then return the start type ('start') else return the given type

**Return:** `"join" | "default" | "start" | "end" | "divider" | "choice" | "fork"`

### endIdIfNeeded

If the id is an end node ( [*] ), then return a new id constructed from the end node name and the current start_end node count. else return the given id

**Return:** `string`

### endTypeIfNeeded

If the id is an end node ( [*] ), then return the end type else return the given type

**Return:** `"join" | "default" | "start" | "end" | "divider" | "choice" | "fork"`

### addRelationObjs

**Return:** `void`

### addRelation

Add a relation between two items. The items may be full objects or just the string id of a state.

**Return:** `void`

### addDescription

**Return:** `void`

### cleanupLabel

**Return:** `string`

### getDividerId

**Return:** `string`

### addStyleClass

Called when the parser comes across a (style) class definition

**Return:** `void`

### getClasses

**Return:** `Map<string, StyleClass>`

### setCssClass

Add a (style) class or css class to a state with the given id. If the state isn't already in the list of known states, add it. Might be called by parser when a style class or CSS class should be applied to a state

**Return:** `void`

### setStyle

Add a style to a state with the given id.

**Return:** `void`

### setTextStyle

Add a text style to a state with the given id

**Return:** `void`

### getDirection

**Return:** `"TB" | "BT" | "LR" | "RL"`

### setDirection

**Return:** `void`

### trimColon

**Return:** `string`

### getData

**Return:** `{
        nodes: NodeData[];
        edges: Edge[];
        other: {};
        config: MermaidConfig;
        direction: string;
    }`

### getConfig

**Return:** `import("../../config.type.js").StateDiagramConfig | undefined`
