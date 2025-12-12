# Transformer

Transformers handle syntax trees and files. They are functions that are called each time a syntax tree and file are passed through the run phase. When an error occurs in them (either because it’s thrown, returned, rejected, or passed to `next`), the process stops. The run phase is handled by [`trough`][trough], see its documentation for the exact semantics of these functions. > **Note**: you should likely ignore `next`: don’t accept it. > it supports callback-style async work. > But promises are likely easier to reason about. [trough]: https://github.com/wooorm/trough#function-fninput-next

## Definition

```typescript
(tree: Input, file: VFile, next: TransformCallback<Output>) => (Promise<Output | undefined | void> | Promise<never> | // For some reason this is needed separately.
Output | Error | undefined | void)
```
