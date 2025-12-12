# forceSimulation

Create a new simulation with the specified array of nodes and no forces. If nodes is not specified, it defaults to the empty array. The simulator starts automatically; use simulation.on to listen for tick events as the simulation runs. If you wish to run the simulation manually instead, call simulation.stop, and then call simulation.tick as desired. Use this signature, when creating a simulation WITHOUT link force(s). The generic refers to the type of the data for a node.

**Return Type:** `Simulation<NodeDatum, undefined>`

## Parameters

| Name        | Type          | Optional | Description                                            |
| :---------- | :------------ | :------- | :----------------------------------------------------- |
| `nodesData` | `NodeDatum[]` | Yes      | Optional array of nodes data, defaults to empty array. |
