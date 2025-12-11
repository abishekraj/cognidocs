# RemainingProcessOptions
## Definition
```typescript
Pick<
    ProcessOptions,
    Exclude<keyof ProcessOptions, keyof ProcessOptionsPreload>
  >
```