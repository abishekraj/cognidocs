# ShouldTransformCachedModuleHook
## Definition
```typescript
(
	this: PluginContext,
	options: {
		ast: ProgramNode;
		code: string;
		id: string;
		meta: CustomPluginOptions;
		moduleSideEffects: boolean | 'no-treeshake';
		resolvedSources: ResolvedIdMap;
		syntheticNamedExports: boolean | string;
	}
) => boolean | NullValue
```