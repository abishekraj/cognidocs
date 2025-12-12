# FormatOptions

## Properties

| Name         | Type                                                              | Optional | Description |
| :----------- | :---------------------------------------------------------------- | :------- | :---------- |
| `ascii_only` | `boolean`                                                         | Yes      | -           |
| `beautify`   | `boolean`                                                         | Yes      | -           |
| `braces`     | `boolean`                                                         | Yes      | -           |
| `comments`   | `boolean \| 'all' \| 'some' \| RegExp \| ( (node: any, comment: { |

        value: string,
        type: 'comment1' \| 'comment2' \| 'comment3' \| 'comment4',
        pos: number,
        line: number,
        col: number,
    }) => boolean )` | Yes | - |

| `ecma` | `ECMA` | Yes | - |
| `ie8` | `boolean` | Yes | - |
| `keep_numbers` | `boolean` | Yes | - |
| `indent_level` | `number` | Yes | - |
| `indent_start` | `number` | Yes | - |
| `inline_script` | `boolean` | Yes | - |
| `keep_quoted_props` | `boolean` | Yes | - |
| `max_line_len` | `number \| false` | Yes | - |
| `preamble` | `string` | Yes | - |
| `preserve_annotations` | `boolean` | Yes | - |
| `quote_keys` | `boolean` | Yes | - |
| `quote_style` | `OutputQuoteStyle` | Yes | - |
| `safari10` | `boolean` | Yes | - |
| `semicolons` | `boolean` | Yes | - |
| `shebang` | `boolean` | Yes | - |
| `shorthand` | `boolean` | Yes | - |
| `source_map` | `SourceMapOptions` | Yes | - |
| `webkit` | `boolean` | Yes | - |
| `width` | `number` | Yes | - |
| `wrap_iife` | `boolean` | Yes | - |
| `wrap_func_args` | `boolean` | Yes | - |
