# hierarchy

Constructs a root node from the specified hierarchical data.

**Return Type:** `HierarchyNode<Datum>`

## Parameters

| Name       | Type                                                 | Optional | Description                                                                                                                                                                                                                                |
| :--------- | :--------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`     | `Datum`                                              | No       | The root specified data. If _data_ is a Map, it is implicitly converted to the entry [undefined, *data*], and the children accessor instead defaults to `(d) => Array.isArray(d) ? d[1] : null;`.                                          |
| `children` | `(d: Datum) => Iterable<Datum> \| null \| undefined` | Yes      | The specified children accessor function is invoked for each datum, starting with the root data, and must return an iterable of data representing the children, if any. If children is not specified, it defaults to: `(d) => d.children`. |
