# HooksObject
## Definition
```typescript
{
	[K in keyof HooksApi<ParserOutput, RendererOutput>]?: (this: _Hooks<ParserOutput, RendererOutput>, ...args: Parameters<HooksApi<ParserOutput, RendererOutput>[K]>) => ReturnType<HooksApi<ParserOutput, RendererOutput>[K]> | Promise<ReturnType<HooksApi<ParserOutput, RendererOutput>[K]>>;
}
```