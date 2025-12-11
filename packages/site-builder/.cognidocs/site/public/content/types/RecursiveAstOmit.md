# RecursiveAstOmit

Exclude/omit all `AstNode` attributes recursively.

## Definition
```typescript
T extends object ? {
    [P in keyof T as Exclude<P, keyof AstNode>]: RecursiveAstOmit<T[P]>;
} : T
```