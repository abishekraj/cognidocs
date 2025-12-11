# ComputePositionConfig
## Definition
```typescript
Prettify<Omit<ComputePositionConfig_2, 'middleware' | 'platform'> & {
    /**
     * Array of middleware objects to modify the positioning or provide data for
     * rendering.
     */
    middleware?: Array<Middleware | null | undefined | false>;
    /**
     * Custom or extended platform object.
     */
    platform?: Platform;
}>
```