# PluginHooks
## Definition
```typescript
{
	[K in keyof FunctionPluginHooks]: ObjectHook<
		K extends AsyncPluginHooks ? MakeAsync<FunctionPluginHooks[K]> : FunctionPluginHooks[K],
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		HookFilterExtension<K> & (K extends ParallelPluginHooks ? { sequential?: boolean } : {})
	>;
}
```