# VFileWithOutput

Type to generate a {@linkcode VFile } corresponding to a compiler result. If a result that is not acceptable on a `VFile` is used, that will be stored on the `result` field of {@linkcode VFile }.

## Definition
```typescript
(Result extends Value | undefined ? VFile : VFile & {
    result: Result;
})
```