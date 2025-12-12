# NormalizedAmdOptions

## Definition

```typescript
(
	| {
			autoId: false;
			id?: string | undefined;
	  }
	| {
			autoId: true;
			basePath: string;
	  }
) & {
	define: string;
	forceJsExtensionForImports: boolean;
}
```
