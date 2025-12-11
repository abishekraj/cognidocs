# Help
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `helpWidth` | `number` | - |
| `sortSubcommands` | `boolean` | - |
| `sortOptions` | `boolean` | - |

## Methods
### subcommandTerm
**Return:** `string`

### subcommandDescription
**Return:** `string`

### optionTerm
**Return:** `string`

### optionDescription
**Return:** `string`

### argumentTerm
**Return:** `string`

### argumentDescription
**Return:** `string`

### commandUsage
**Return:** `string`

### commandDescription
**Return:** `string`

### visibleCommands
**Return:** `Command[]`

### visibleOptions
**Return:** `Option[]`

### visibleArguments
**Return:** `Argument[]`

### longestSubcommandTermLength
**Return:** `number`

### longestOptionTermLength
**Return:** `number`

### longestArgumentTermLength
**Return:** `number`

### padWidth
**Return:** `number`

### wrap

Wrap the given string to width characters per line, with lines after the first indented. Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.

**Return:** `string`

### formatHelp
**Return:** `string`
