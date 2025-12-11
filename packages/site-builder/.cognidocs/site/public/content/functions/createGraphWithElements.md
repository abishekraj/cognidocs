# createGraphWithElements

Creates a  graph by merging the graph construction and DOM element insertion. This function creates the graph, inserts the SVG groups (clusters, edgePaths, edgeLabels, nodes) into the provided element, and uses `insertNode` to add nodes to the diagram. Node dimensions are computed using each node's bounding box.


**Return Type:** `Promise<{
    graph: graphlib.Graph;
    groups: {
        clusters: D3Selection<SVGGElement>;
        edgePaths: D3Selection<SVGGElement>;
        edgeLabels: D3Selection<SVGGElement>;
        nodes: D3Selection<SVGGElement>;
        rootGroups: D3Selection<SVGGElement>;
    };
    nodeElements: Map<string, D3Selection<SVGElement | SVGGElement>>;
}>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `element` | `D3Selection` | No | The D3 selection in which the SVG groups are inserted. |
| `data4Layout` | `LayoutData` | No | The layout data containing nodes and edges. |