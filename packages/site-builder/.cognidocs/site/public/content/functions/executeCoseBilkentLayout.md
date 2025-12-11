# executeCoseBilkentLayout

Execute the cose-bilkent layout algorithm on generic layout data This function takes layout data and uses Cytoscape with the cose-bilkent algorithm to calculate optimal node positions and edge paths.


**Return Type:** `Promise<LayoutResult>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `data` | `LayoutData` | No | The layout data containing nodes, edges, and configuration |
| `_config` | `MermaidConfig` | No | - |