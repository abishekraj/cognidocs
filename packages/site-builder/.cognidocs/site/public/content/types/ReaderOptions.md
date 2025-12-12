# ReaderOptions

## Definition

```typescript
fsWalk.Options & {
    transform(entry: Entry): EntryItem;
    deepFilter: DeepFilterFunction;
    entryFilter: EntryFilterFunction;
    errorFilter: ErrorFilterFunction;
    fs: FileSystemAdapter;
    stats: boolean;
}
```
