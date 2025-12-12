# TokenizerObject

## Definition

```typescript
{
	[K in keyof TokenizerApi<ParserOutput, RendererOutput>]?: (this: _Tokenizer<ParserOutput, RendererOutput>, ...args: Parameters<TokenizerApi<ParserOutput, RendererOutput>[K]>) => ReturnType<TokenizerApi<ParserOutput, RendererOutput>[K]> | false;
}
```
