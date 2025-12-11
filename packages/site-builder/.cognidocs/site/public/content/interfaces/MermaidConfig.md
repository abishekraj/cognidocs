# MermaidConfig
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `theme` | `'default' \| 'base' \| 'dark' \| 'forest' \| 'neutral' \| 'null'` | Yes | - |
| `themeVariables` | `any` | Yes | - |
| `themeCSS` | `string` | Yes | - |
| `look` | `'classic' \| 'handDrawn'` | Yes | - |
| `handDrawnSeed` | `number` | Yes | - |
| `layout` | `string` | Yes | - |
| `maxTextSize` | `number` | Yes | - |
| `maxEdges` | `number` | Yes | - |
| `elk` | `{
        /**
         * Elk specific option that allows edges to share path where it convenient. It can make for pretty diagrams but can also make it harder to read the diagram.
         *
         */
        mergeEdges?: boolean;
        /**
         * Elk specific option affecting how nodes are placed.
         *
         */
        nodePlacementStrategy?: 'SIMPLE' \| 'NETWORK_SIMPLEX' \| 'LINEAR_SEGMENTS' \| 'BRANDES_KOEPF';
        /**
         * This strategy decides how to find cycles in the graph and deciding which edges need adjustment to break loops.
         *
         */
        cycleBreakingStrategy?: 'GREEDY' \| 'DEPTH_FIRST' \| 'INTERACTIVE' \| 'MODEL_ORDER' \| 'GREEDY_MODEL_ORDER';
        /**
         * The node order given by the model does not change to produce a better layout. E.g. if node A is before node B in the model this is not changed during crossing minimization. This assumes that the node model order is already respected before crossing minimization. This can be achieved by setting considerModelOrder.strategy to NODES_AND_EDGES.
         *
         */
        forceNodeModelOrder?: boolean;
        /**
         * Preserves the order of nodes and edges in the model file if this does not lead to additional edge crossings. Depending on the strategy this is not always possible since the node and edge order might be conflicting.
         *
         */
        considerModelOrder?: 'NONE' \| 'NODES_AND_EDGES' \| 'PREFER_EDGES' \| 'PREFER_NODES';
    }` | Yes | - |
| `darkMode` | `boolean` | Yes | - |
| `htmlLabels` | `boolean` | Yes | - |
| `fontFamily` | `string` | Yes | - |
| `altFontFamily` | `string` | Yes | - |
| `logLevel` | `'trace' \| 0 \| 'debug' \| 1 \| 'info' \| 2 \| 'warn' \| 3 \| 'error' \| 4 \| 'fatal' \| 5` | Yes | - |
| `securityLevel` | `'strict' \| 'loose' \| 'antiscript' \| 'sandbox'` | Yes | - |
| `startOnLoad` | `boolean` | Yes | - |
| `arrowMarkerAbsolute` | `boolean` | Yes | - |
| `secure` | `string[]` | Yes | - |
| `legacyMathML` | `boolean` | Yes | - |
| `forceLegacyMathML` | `boolean` | Yes | - |
| `deterministicIds` | `boolean` | Yes | - |
| `deterministicIDSeed` | `string` | Yes | - |
| `flowchart` | `FlowchartDiagramConfig` | Yes | - |
| `sequence` | `SequenceDiagramConfig` | Yes | - |
| `gantt` | `GanttDiagramConfig` | Yes | - |
| `journey` | `JourneyDiagramConfig` | Yes | - |
| `timeline` | `TimelineDiagramConfig` | Yes | - |
| `class` | `ClassDiagramConfig` | Yes | - |
| `state` | `StateDiagramConfig` | Yes | - |
| `er` | `ErDiagramConfig` | Yes | - |
| `pie` | `PieDiagramConfig` | Yes | - |
| `quadrantChart` | `QuadrantChartConfig` | Yes | - |
| `xyChart` | `XYChartConfig` | Yes | - |
| `requirement` | `RequirementDiagramConfig` | Yes | - |
| `architecture` | `ArchitectureDiagramConfig` | Yes | - |
| `mindmap` | `MindmapDiagramConfig` | Yes | - |
| `kanban` | `KanbanDiagramConfig` | Yes | - |
| `gitGraph` | `GitGraphDiagramConfig` | Yes | - |
| `c4` | `C4DiagramConfig` | Yes | - |
| `sankey` | `SankeyDiagramConfig` | Yes | - |
| `packet` | `PacketDiagramConfig` | Yes | - |
| `block` | `BlockDiagramConfig` | Yes | - |
| `radar` | `RadarDiagramConfig` | Yes | - |
| `dompurifyConfig` | `DOMPurifyConfiguration` | Yes | - |
| `wrap` | `boolean` | Yes | - |
| `fontSize` | `number` | Yes | - |
| `markdownAutoWrap` | `boolean` | Yes | - |
| `suppressErrorRendering` | `boolean` | Yes | - |