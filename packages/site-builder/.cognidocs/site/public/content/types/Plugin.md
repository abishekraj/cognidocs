# Plugin

Single plugin. Plugins configure the processors they are applied on in the following ways: _ they change the processor, such as the parser, the compiler, or by configuring data _ they specify how to handle trees and files In practice, they are functions that can receive options and configure the processor (`this`). > **Note**: plugins are called when the processor is _frozen_, not when > they are applied.

## Definition

```typescript
((this: Processor, ...parameters: PluginParameters) => Input extends string ? Output extends Node | undefined ? undefined | void : never : Output extends CompileResults ? Input extends Node | undefined ? undefined | void : never : Transformer<Input extends Node ? Input : Node, Output extends Node ? Output : Node> | undefined | void)
```
