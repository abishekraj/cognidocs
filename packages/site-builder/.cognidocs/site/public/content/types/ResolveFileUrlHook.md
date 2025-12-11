# ResolveFileUrlHook
## Definition
```typescript
(
	this: PluginContext,
	options: {
		chunkId: string;
		fileName: string;
		format: InternalModuleFormat;
		moduleId: string;
		referenceId: string;
		relativePath: string;
	}
) => string | NullValue
```