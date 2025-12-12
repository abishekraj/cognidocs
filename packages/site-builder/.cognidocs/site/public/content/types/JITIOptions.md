# JITIOptions

## Definition

```typescript
{
    transform?: (opts: TransformOptions) => TRANSFORM_RESULT;
    debug?: boolean;
    cache?: boolean | string;
    sourceMaps?: boolean;
    requireCache?: boolean;
    v8cache?: boolean;
    interopDefault?: boolean;
    esmResolve?: boolean;
    cacheVersion?: string;
    onError?: (error: Error) => void;
    legacy?: boolean;
    extensions?: string[];
    transformOptions?: Omit<TransformOptions, "source">;
    alias?: Record<string, string>;
    nativeModules?: string[];
    transformModules?: string[];
    experimentalBun?: boolean;
}
```
