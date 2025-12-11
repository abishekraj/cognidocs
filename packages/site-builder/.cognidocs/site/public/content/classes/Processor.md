# Processor
**Extends:** `CallableInstance`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `Compiler` | `(Compiler<CompileTree extends undefined ? Node : CompileTree, CompileResult extends undefined ? CompileResults : CompileResult> \| undefined)` | - |
| `Parser` | `(Parser<ParseTree extends undefined ? Node : ParseTree> \| undefined)` | - |
| `attachers` | `Array<[plugin: Plugin<unknown[], undefined, undefined>, ...parameters: unknown[]]>` | - |
| `compiler` | `(Compiler<CompileTree extends undefined ? Node : CompileTree, CompileResult extends undefined ? CompileResults : CompileResult> \| undefined)` | - |
| `freezeIndex` | `number` | - |
| `frozen` | `boolean \| undefined` | - |
| `namespace` | `Data` | - |
| `parser` | `(Parser<ParseTree extends undefined ? Node : ParseTree> \| undefined)` | - |
| `transformers` | `Pipeline` | - |

## Methods
### copy

Copy a processor.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### data

Configure the processor with info available to all plugins. Information is stored in an object. Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases. > **Note**: setting information cannot occur on *frozen* processors. > Call the processor first to create a new unfrozen processor. > **Note**: to register custom data in TypeScript, augment the > {@linkcode Data} interface.

**Return:** `Data`

### data

Configure the processor with info available to all plugins. Information is stored in an object. Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases. > **Note**: setting information cannot occur on *frozen* processors. > Call the processor first to create a new unfrozen processor. > **Note**: to register custom data in TypeScript, augment the > {@linkcode Data} interface.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### data

Configure the processor with info available to all plugins. Information is stored in an object. Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases. > **Note**: setting information cannot occur on *frozen* processors. > Call the processor first to create a new unfrozen processor. > **Note**: to register custom data in TypeScript, augment the > {@linkcode Data} interface.

**Return:** `import("unified").Data[Key]`

### data

Configure the processor with info available to all plugins. Information is stored in an object. Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases. > **Note**: setting information cannot occur on *frozen* processors. > Call the processor first to create a new unfrozen processor. > **Note**: to register custom data in TypeScript, augment the > {@linkcode Data} interface.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### freeze

Freeze a processor. Frozen processors are meant to be extended and not to be configured directly. When a processor is frozen it cannot be unfrozen. New processors working the same way can be created by calling the processor. It’s possible to freeze processors explicitly by calling `.freeze()`. Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`, `.stringify()`, `.process()`, or `.processSync()` are called.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### parse

Parse text to a syntax tree. > **Note**: `parse` freezes the processor if not already *frozen*. > **Note**: `parse` performs the parse phase, not the run phase or other > phases.

**Return:** `ParseTree extends undefined ? Node : ParseTree`

### process

Process the given file as configured on the processor. > **Note**: `process` freezes the processor if not already *frozen*. > **Note**: `process` performs the parse, run, and stringify phases.

**Return:** `undefined`

### process

Process the given file as configured on the processor. > **Note**: `process` freezes the processor if not already *frozen*. > **Note**: `process` performs the parse, run, and stringify phases.

**Return:** `Promise<VFileWithOutput<CompileResult>>`

### processSync

Process the given file as configured on the processor. An error is thrown if asynchronous transforms are configured. > **Note**: `processSync` freezes the processor if not already *frozen*. > **Note**: `processSync` performs the parse, run, and stringify phases.

**Return:** `VFileWithOutput<CompileResult>`

### run

Run *transformers* on a syntax tree. > **Note**: `run` freezes the processor if not already *frozen*. > **Note**: `run` performs the run phase, not other phases.

**Return:** `undefined`

### run

Run *transformers* on a syntax tree. > **Note**: `run` freezes the processor if not already *frozen*. > **Note**: `run` performs the run phase, not other phases.

**Return:** `undefined`

### run

Run *transformers* on a syntax tree. > **Note**: `run` freezes the processor if not already *frozen*. > **Note**: `run` performs the run phase, not other phases.

**Return:** `Promise<TailTree extends undefined ? Node : TailTree>`

### runSync

Run *transformers* on a syntax tree. An error is thrown if asynchronous transforms are configured. > **Note**: `runSync` freezes the processor if not already *frozen*. > **Note**: `runSync` performs the run phase, not other phases.

**Return:** `TailTree extends undefined ? Node : TailTree`

### stringify

Compile a syntax tree. > **Note**: `stringify` freezes the processor if not already *frozen*. > **Note**: `stringify` performs the stringify phase, not the run phase > or other phases.

**Return:** `CompileResult extends undefined ? Value : CompileResult`

### use

Configure the processor to use a plugin, a list of usable values, or a preset. If the processor is already using a plugin, the previous plugin configuration is changed based on the options that are passed in. In other words, the plugin is not added a second time. > **Note**: `use` cannot be called on *frozen* processors. > Call the processor first to create a new unfrozen processor.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### use

Configure the processor to use a plugin, a list of usable values, or a preset. If the processor is already using a plugin, the previous plugin configuration is changed based on the options that are passed in. In other words, the plugin is not added a second time. > **Note**: `use` cannot be called on *frozen* processors. > Call the processor first to create a new unfrozen processor.

**Return:** `Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>`

### use

Configure the processor to use a plugin, a list of usable values, or a preset. If the processor is already using a plugin, the previous plugin configuration is changed based on the options that are passed in. In other words, the plugin is not added a second time. > **Note**: `use` cannot be called on *frozen* processors. > Call the processor first to create a new unfrozen processor.

**Return:** `UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>`
