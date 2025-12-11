# UriDto

Mapped-type that replaces all occurrences of URI with UriComponents

## Definition
```typescript
{
    [K in keyof T]: T[K] extends URI ? UriComponents : UriDto<T[K]>;
}
```