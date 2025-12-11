# AstNodeTypesWithCrossReferences
## Definition
```typescript
{
    [T in keyof A]: CrossReferencesOfAstNodeType<A[T]> extends never ? never : A[T]
}[keyof A]
```