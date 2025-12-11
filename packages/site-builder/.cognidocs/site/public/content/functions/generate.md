# generate

Turns an AST into code, maintaining sourcemaps, user preferences, and valid output.


**Return Type:** `GeneratorResult`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `ast` | `t.Node` | No | the abstract syntax tree from which to generate output code. |
| `opts` | `GeneratorOptions` | Yes | used for specifying options for code generation. |
| `code` | `string \| { [filename: string]: string }` | Yes | the original source code, used for source maps. |