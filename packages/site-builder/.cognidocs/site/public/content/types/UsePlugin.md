# UsePlugin

Create a processor based on the input/output of a {@link Plugin plugin}.

## Definition

```typescript
(Input extends string ? Output extends Node | undefined ? Processor<Output extends undefined ? ParseTree : Output, HeadTree, TailTree, CompileTree, CompileResult> : Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult> : Output extends CompileResults ? Input extends Node | undefined ? Processor<ParseTree, HeadTree, TailTree, Input extends undefined ? CompileTree : Input, Output extends undefined ? CompileResult : Output> : Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult> : Input extends Node | undefined ? Output extends Node | undefined ? Processor<ParseTree, HeadTree extends undefined ? Input : HeadTree, Output extends undefined ? TailTree : Output, CompileTree, CompileResult> : Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult> : Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>)
```
