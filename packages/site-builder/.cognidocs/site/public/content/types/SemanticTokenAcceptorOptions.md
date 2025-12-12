# SemanticTokenAcceptorOptions

## Definition

```typescript
({
    line: number;
    char: number;
    length: number;
} | {
    node: N;
    property: Properties<N>;
    index?: number;
} | {
    node: N;
    keyword: string;
    index?: number;
} | {
    cst: CstNode;
} | {
    range: Range;
}) & {
    type: string;
    modifier?: string | string[];
}
```
