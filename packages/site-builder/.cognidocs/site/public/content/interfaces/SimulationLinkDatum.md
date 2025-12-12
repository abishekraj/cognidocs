# SimulationLinkDatum

The base data structure for the datum of a Simulation Link, as used by ForceLink. The optional properties contained in this data structure are internally assigned by when initializing with ForceLink.links(...) IMPORTANT: The source and target properties may be internally mutated in type during the ForceLink initialization process (possibly being changed from a node index in the nodes array, or a node id string to the simulation node object which was mapped in using the current ForceLink.id(...) accessor function.)

## Properties

| Name     | Type                            | Optional | Description |
| :------- | :------------------------------ | :------- | :---------- |
| `source` | `NodeDatum \| string \| number` | No       | -           |
| `target` | `NodeDatum \| string \| number` | No       | -           |
| `index`  | `number \| undefined`           | Yes      | -           |
