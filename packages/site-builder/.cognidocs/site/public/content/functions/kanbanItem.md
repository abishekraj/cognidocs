# kanbanItem

**Return Type:** `Promise<import("d3-selection").Selection<SVGGElement, unknown, Element | null, unknown>>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `parent` | `D3Selection<T>` | No | - |
| `kanbanNode` | `Omit<Node, 'shape'> \| Omit<KanbanNode, 'level' \| 'shape'>` | No | - |
| `{ config }` | `ShapeRenderOptions` | No | - |