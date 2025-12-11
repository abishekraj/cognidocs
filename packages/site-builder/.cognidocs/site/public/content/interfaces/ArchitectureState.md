# ArchitectureState
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `nodes` | `Record<string, ArchitectureNode>` | No | - |
| `groups` | `Record<string, ArchitectureGroup>` | No | - |
| `edges` | `ArchitectureEdge[]` | No | - |
| `registeredIds` | `Record<string, 'node' \| 'group'>` | No | - |
| `dataStructures` | `ArchitectureDataStructures` | Yes | - |
| `elements` | `Record<string, D3Element>` | No | - |
| `config` | `ArchitectureDiagramConfig` | No | - |