# ArchitectureDB

## Properties

| Name                | Type                                                     | Optional | Description |
| :------------------ | :------------------------------------------------------- | :------- | :---------- |
| `clear`             | `() => void`                                             | No       | -           |
| `addService`        | `(service: Omit<ArchitectureService, 'edges'>) => void`  | No       | -           |
| `getServices`       | `() => ArchitectureService[]`                            | No       | -           |
| `addJunction`       | `(service: Omit<ArchitectureJunction, 'edges'>) => void` | No       | -           |
| `getJunctions`      | `() => ArchitectureJunction[]`                           | No       | -           |
| `getNodes`          | `() => ArchitectureNode[]`                               | No       | -           |
| `getNode`           | `(id: string) => ArchitectureNode \| null`               | No       | -           |
| `addGroup`          | `(group: ArchitectureGroup) => void`                     | No       | -           |
| `getGroups`         | `() => ArchitectureGroup[]`                              | No       | -           |
| `addEdge`           | `(edge: ArchitectureEdge) => void`                       | No       | -           |
| `getEdges`          | `() => ArchitectureEdge[]`                               | No       | -           |
| `setElementForId`   | `(id: string, element: D3Element) => void`               | No       | -           |
| `getElementById`    | `(id: string) => D3Element`                              | No       | -           |
| `getDataStructures` | `() => ArchitectureDataStructures`                       | No       | -           |
