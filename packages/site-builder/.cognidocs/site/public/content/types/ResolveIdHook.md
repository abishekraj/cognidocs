# ResolveIdHook
## Definition
```typescript
(
	this: PluginContext,
	source: string,
	importer: string | undefined,
	options: { attributes: Record<string, string>; custom?: CustomPluginOptions; isEntry: boolean }
) => ResolveIdResult
```