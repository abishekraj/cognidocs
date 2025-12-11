# AmdOptions
## Definition
```typescript
(
	| {
			autoId?: false | undefined;
			id: string;
	  }
	| {
			autoId: true;
			basePath?: string | undefined;
			id?: undefined | undefined;
	  }
	| {
			autoId?: false | undefined;
			id?: undefined | undefined;
	  }
) & {
	define?: string | undefined;
	forceJsExtensionForImports?: boolean | undefined;
}
```