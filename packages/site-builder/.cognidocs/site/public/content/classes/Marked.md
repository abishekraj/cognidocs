# Marked

## Properties

| Name       | Type                                                         | Description |
| :--------- | :----------------------------------------------------------- | :---------- |
| `defaults` | `MarkedOptions<ParserOutput, RendererOutput>`                | -           |
| `options`  | `(opt: MarkedOptions<ParserOutput, RendererOutput>) => this` | -           |
| `parse`    | `{                                                           |

    	(src: string, options: MarkedOptions<ParserOutput, RendererOutput> & {
    		async: true;
    	}): Promise<ParserOutput>;
    	(src: string, options: MarkedOptions<ParserOutput, RendererOutput> & {
    		async: false;
    	}): ParserOutput;
    	(src: string, options?: MarkedOptions<ParserOutput, RendererOutput> \| null): ParserOutput \| Promise<ParserOutput>;
    }` | - |

| `parseInline` | `{
		(src: string, options: MarkedOptions<ParserOutput, RendererOutput> & {
			async: true;
		}): Promise<ParserOutput>;
		(src: string, options: MarkedOptions<ParserOutput, RendererOutput> & {
			async: false;
		}): ParserOutput;
		(src: string, options?: MarkedOptions<ParserOutput, RendererOutput> \| null): ParserOutput \| Promise<ParserOutput>;
	}` | - |
| `Parser` | `{
		new (options?: MarkedOptions<ParserOutput, RendererOutput> \| undefined): _Parser<ParserOutput, RendererOutput>;
		parse<ParserOutput_1 = string, RendererOutput_1 = string>(tokens: Token[], options?: MarkedOptions<ParserOutput_1, RendererOutput_1>): ParserOutput_1;
		parseInline<ParserOutput_1 = string, RendererOutput_1 = string>(tokens: Token[], options?: MarkedOptions<ParserOutput_1, RendererOutput_1>): ParserOutput_1;
	}` | - |
| `Renderer` | `{
		new (options?: MarkedOptions<ParserOutput, RendererOutput> \| undefined): _Renderer<ParserOutput, RendererOutput>;
	}` | - |
| `TextRenderer` | `{
		new (): _TextRenderer<RendererOutput>;
	}` | - |
| `Lexer` | `typeof _Lexer` | - |
| `Tokenizer` | `{
		new (options?: MarkedOptions<ParserOutput, RendererOutput> \| undefined): _Tokenizer<ParserOutput, RendererOutput>;
	}` | - |
| `Hooks` | `{
		new (options?: MarkedOptions<ParserOutput, RendererOutput> \| undefined): _Hooks<ParserOutput, RendererOutput>;
		passThroughHooks: Set<string>;
		passThroughHooksRespectAsync: Set<string>;
	}` | - |
| `parseMarkdown` | `any` | - |
| `onError` | `any` | - |

## Methods

### walkTokens

Run callback for every token

**Return:** `MaybePromise[]`

### use

**Return:** `this`

### setOptions

**Return:** `this`

### lexer

**Return:** `TokensList`

### parser

**Return:** `ParserOutput`
