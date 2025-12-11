# renderToStaticNodeStream

Similar to `renderToNodeStream`, except this doesn't create extra DOM attributes such as `data-reactid`, that React uses internally. The HTML output by this stream is exactly equal to what `ReactDOMServer.renderToStaticMarkup()` would return.


**Return Type:** `NodeJS.ReadableStream`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `element` | `ReactNode` | No | - |
| `options` | `ServerOptions` | Yes | - |