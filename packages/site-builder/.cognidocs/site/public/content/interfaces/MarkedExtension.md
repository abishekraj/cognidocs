# MarkedExtension
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `async` | `boolean` | Yes | - |
| `breaks` | `boolean` | Yes | - |
| `extensions` | `TokenizerAndRendererExtension<ParserOutput, RendererOutput>[] \| null` | Yes | - |
| `gfm` | `boolean` | Yes | - |
| `hooks` | `HooksObject<ParserOutput, RendererOutput> \| null` | Yes | - |
| `pedantic` | `boolean` | Yes | - |
| `renderer` | `RendererObject<ParserOutput, RendererOutput> \| null` | Yes | - |
| `silent` | `boolean` | Yes | - |
| `tokenizer` | `TokenizerObject \| null` | Yes | - |
| `walkTokens` | `((token: Token) => void \| Promise<void>) \| null` | Yes | - |