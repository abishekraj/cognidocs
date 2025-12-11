# D3DragEvent

D3 Drag event The first generic refers to the type of element to be dragged. The second generic refers to the type of the datum of the dragged element. The third generic refers to the type of the drag behavior subject.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `target` | `DragBehavior<GElement, Datum, Subject>` | No | - |
| `type` | `"start" \| "drag" \| "end" \| string` | No | - |
| `subject` | `Subject` | No | - |
| `x` | `number` | No | - |
| `y` | `number` | No | - |
| `dx` | `number` | No | - |
| `dy` | `number` | No | - |
| `identifier` | `"mouse" \| number` | No | - |
| `active` | `number` | No | - |
| `sourceEvent` | `any` | No | - |