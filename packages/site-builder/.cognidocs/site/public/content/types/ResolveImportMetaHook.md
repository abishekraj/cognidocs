# ResolveImportMetaHook

## Definition

```typescript
(
  this: PluginContext,
  property: string | null,
  options: { chunkId: string; format: InternalModuleFormat; moduleId: string }
) => string | NullValue;
```
