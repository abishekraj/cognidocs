# CrossReferencesOfAstNodeType

## Definition

```typescript
(ExtractKeysOfValueType<N, Reference | undefined> |
  ExtractKeysOfValueType<N, Array<Reference | undefined> | undefined>) &
  // eslint-disable-next-line @typescript-eslint/ban-types
  {};
```
