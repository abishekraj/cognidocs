# renderToStaticMarkup

Similar to `renderToString`, except this doesn't create extra DOM attributes such as `data-reactid`, that React uses internally. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save lots of bytes.

**Return Type:** `string`

## Parameters

| Name      | Type            | Optional | Description |
| :-------- | :-------------- | :------- | :---------- |
| `element` | `ReactNode`     | No       | -           |
| `options` | `ServerOptions` | Yes      | -           |
