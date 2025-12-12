# renderToNodeStream

Render a React element to its initial HTML. Returns a Readable stream that outputs an HTML string. The HTML output by this stream is exactly equal to what `ReactDOMServer.renderToString()` would return.

**Return Type:** `NodeJS.ReadableStream`

## Parameters

| Name      | Type            | Optional | Description |
| :-------- | :-------------- | :------- | :---------- |
| `element` | `ReactNode`     | No       | -           |
| `options` | `ServerOptions` | Yes      | -           |
