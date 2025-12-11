# HookFilterExtension
## Definition
```typescript
K extends 'transform'
	? { filter?: HookFilter | undefined }
	: K extends 'load'
		? { filter?: Pick<HookFilter, 'id'> | undefined }
		: K extends 'resolveId'
			? { filter?: { id?: StringFilter<RegExp> | undefined } } | undefined
			: // eslint-disable-next-line @typescript-eslint/no-empty-object-type
				{}
```