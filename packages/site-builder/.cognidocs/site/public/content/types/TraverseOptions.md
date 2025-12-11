# TraverseOptions
## Definition
```typescript
{
    scope?: Scope;
    noScope?: boolean;
    denylist?: NodeType[];
    /** @deprecated will be removed in Babel 8 */
    blacklist?: NodeType[];
    shouldSkip?: (node: NodePath) => boolean;
} & Visitor<S>
```