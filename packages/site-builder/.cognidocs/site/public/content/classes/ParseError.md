# ParseError

If KaTeX encounters an error (invalid or unsupported LaTeX) and `throwOnError` hasn't been set to `false`, then `katex.render` and `katex.renderToString` will throw an exception of type `ParseError`. The message in this error includes some of the LaTeX source code, so needs to be escaped if you want to render it to HTML.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `name` | `"ParseError"` | - |
| `position` | `number` | - |
| `length` | `number` | - |
| `rawMessage` | `string` | - |
| `message` | `string` | - |
