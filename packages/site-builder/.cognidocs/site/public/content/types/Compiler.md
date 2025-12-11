# Compiler

A **compiler** handles the compiling of a syntax tree to something else (in most cases, text) (TypeScript type). It is used in the stringify phase and called with a {@linkcode Node } and {@linkcode VFile } representation of the document to compile. It should return the textual representation of the given tree (typically `string`). > **Note**: unified typically compiles by serializing: most compilers > return `string` (or `Uint8Array`). > Some compilers, such as the one configured with > [`rehype-react`][rehype-react], return other values (in this case, a > React tree). > If you’re using a compiler that doesn’t serialize, expect different > result values. > > To register custom results in TypeScript, add them to > {@linkcode CompileResultMap }. [rehype-react]: https://github.com/rehypejs/rehype-react

## Definition
```typescript
(tree: Tree, file: VFile) => Result
```