# NormalizedExtension

A filtered, combined, extension.

## Definition

```typescript
{
  [Key in keyof Extension]: Exclude<Extension[Key], undefined>
}
```
