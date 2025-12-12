# Parser

A **parser** handles the parsing of text to a syntax tree. It is used in the parse phase and is called with a `string` and {@linkcode VFile } of the document to parse. It must return the syntax tree representation of the given file ({@linkcode Node }).

## Definition

```typescript
(document: string, file: VFile) => Tree;
```
