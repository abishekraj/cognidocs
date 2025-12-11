# generateCstDts

Will generate TypeScript definitions source code (text). For a set of {@link Rule}. This set of Rules can be obtained from a Parser **instance** via the {@link BaseParser.getGAstProductions} method. Note that this function produces a **string** the output. It is the responsibility of the end-user to create the signatures files. - e.g: via `fs.writeFileSync()` See: https://chevrotain.io/docs/guide/concrete_syntax_tree.html#cst-typescript-signatures


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `productions` | `Record<string, Rule>` | No | - |
| `options` | `GenerateDtsOptions` | Yes | - |