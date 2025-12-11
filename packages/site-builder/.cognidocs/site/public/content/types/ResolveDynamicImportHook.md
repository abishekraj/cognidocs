# ResolveDynamicImportHook
## Definition
```typescript
(
	this: PluginContext,
	specifier: string | AstNode,
	importer: string,
	options: { attributes: Record<string, string> }
) => ResolveIdResult
```