# RendererObject
## Definition
```typescript
{
	[K in keyof RendererApi<ParserOutput, RendererOutput>]?: (this: _Renderer<ParserOutput, RendererOutput>, ...args: Parameters<RendererApi<ParserOutput, RendererOutput>[K]>) => ReturnType<RendererApi<ParserOutput, RendererOutput>[K]> | false;
}
```