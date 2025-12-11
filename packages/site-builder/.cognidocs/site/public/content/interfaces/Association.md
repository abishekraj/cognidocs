# Association

Internal relation from one node to another. Whether the value of `identifier` is expected to be a unique identifier or not depends on the type of node including the Association. An example of this is that they should be unique on {@link Definition}, whereas multiple {@link LinkReference}s can be non-unique to be associated with one definition.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `identifier` | `string` | No | - |
| `label` | `string \| null \| undefined` | Yes | - |