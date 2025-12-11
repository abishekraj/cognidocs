# FullNormalizedExtension

A full, filtereed, normalized, extension.

## Definition
```typescript
{
  [Key in keyof Extension]-?: Exclude<Extension[Key], undefined>
}
```