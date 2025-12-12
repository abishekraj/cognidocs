# ValidationChecks

## Definition

```typescript
{
    [K in keyof T]?: T[K] extends AstNode ? ValidationCheck<T[K]> | Array<ValidationCheck<T[K]>> : never
} & {
    AstNode?: ValidationCheck<AstNode> | Array<ValidationCheck<AstNode>>;
}
```
