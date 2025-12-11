# DecodedSourceMapOrMissing
## Definition
```typescript
| {
			missing: true;
			plugin: string;
	  }
	| (ExistingDecodedSourceMap & { missing?: false | undefined })
```