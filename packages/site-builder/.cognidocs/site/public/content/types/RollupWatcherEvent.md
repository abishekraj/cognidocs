# RollupWatcherEvent
## Definition
```typescript
| { code: 'START' }
	| { code: 'BUNDLE_START'; input?: InputOption | undefined; output: readonly string[] }
	| {
			code: 'BUNDLE_END';
			duration: number;
			input?: InputOption | undefined;
			output: readonly string[];
			result: RollupBuild;
	  }
	| { code: 'END' }
	| { code: 'ERROR'; error: RollupError; result: RollupBuild | null }
```