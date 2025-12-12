# MarkedOptions

## Properties

| Name         | Type                                               | Optional | Description |
| :----------- | :------------------------------------------------- | :------- | :---------- |
| `hooks`      | `_Hooks<ParserOutput, RendererOutput> \| null`     | Yes      | -           |
| `renderer`   | `_Renderer<ParserOutput, RendererOutput> \| null`  | Yes      | -           |
| `tokenizer`  | `_Tokenizer<ParserOutput, RendererOutput> \| null` | Yes      | -           |
| `extensions` | `null \| {                                         |

    	renderers: {
    		[name: string]: RendererExtensionFunction<ParserOutput, RendererOutput>;
    	};
    	childTokens: {
    		[name: string]: string[];
    	};
    	inline?: TokenizerExtensionFunction[];
    	block?: TokenizerExtensionFunction[];
    	startInline?: TokenizerStartFunction[];
    	startBlock?: TokenizerStartFunction[];
    }` | Yes | - |

| `walkTokens` | `null \| ((token: Token) => void \| Promise<void> \| (void \| Promise<void>)[])` | Yes | - |
