# TreemapDB
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `getNodes` | `() => TreemapNode[]` | No | - |
| `addNode` | `(node: TreemapNode, level: number) => void` | No | - |
| `getRoot` | `() => TreemapNode \| undefined` | No | - |
| `getClasses` | `() => Map<string, DiagramStyleClassDef>` | No | - |
| `addClass` | `(className: string, style: string) => void` | No | - |
| `getStylesForClass` | `(classSelector: string) => string[]` | No | - |