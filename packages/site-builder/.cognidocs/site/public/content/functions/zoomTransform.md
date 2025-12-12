# zoomTransform

Returns the current transform for the specified node. Note that node should typically be a DOM element, and not a selection. (A selection may consist of multiple nodes, in different states, and this function only returns a single transform.) If you have a selection, call selection.node first. In the context of an event listener, the node is typically the element that received the input event (which should be equal to event.transform), "this". Internally, an element’s transform is stored as element.\_\_zoom; however, you should use this method rather than accessing it directly. If the given node has no defined transform, returns the identity transformation. The returned transform represents a two-dimensional transformation matrix For details see {@link https://github.com/d3/d3-zoom#zoom-transforms}

**Return Type:** `ZoomTransform`

## Parameters

| Name   | Type                    | Optional | Description                                                  |
| :----- | :---------------------- | :------- | :----------------------------------------------------------- |
| `node` | `ZoomedElementBaseType` | No       | An element for which to retrieve its current zoom transform. |
