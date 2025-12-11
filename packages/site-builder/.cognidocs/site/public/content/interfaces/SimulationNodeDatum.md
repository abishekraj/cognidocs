# SimulationNodeDatum

The base data structure for the datum of a Simulation Node. The optional properties contained in this data structure are internally assigned by the Simulation upon (re-)initialization. When defining a data type to use for node data, it should be an extension of this interface and respect the already "earmarked" properties used by the simulation. IMPORTANT: Prior to initialization, the following properties are optional: index, x, y, vx, and vy. After initialization they will be defined. The optional properties fx and fy are ONLY defined, if the node's position has been fixed.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `index` | `number \| undefined` | Yes | - |
| `x` | `number \| undefined` | Yes | - |
| `y` | `number \| undefined` | Yes | - |
| `vx` | `number \| undefined` | Yes | - |
| `vy` | `number \| undefined` | Yes | - |
| `fx` | `number \| null \| undefined` | Yes | - |
| `fy` | `number \| null \| undefined` | Yes | - |