# Command

## Properties

| Name            | Type              | Description |
| :-------------- | :---------------- | :---------- |
| `args`          | `string[]`        | -           |
| `processedArgs` | `any[]`           | -           |
| `commands`      | `Command[]`       | -           |
| `parent`        | `Command \| null` | -           |

## Methods

### version

Set the program version to `str`. This method auto-registers the "-V, --version" flag which will print the version number when passed. You can optionally supply the flags and description to override the defaults.

**Return:** `this`

### command

Define a command, implemented using an action handler.

**Return:** `ReturnType<this['createCommand']>`

### command

Define a command, implemented in a separate executable file.

**Return:** `this`

### createCommand

Factory routine to create a new unattached command. See .command() for creating an attached subcommand, which uses this routine to create the command. You can override createCommand to customise subcommands.

**Return:** `Command`

### addCommand

Add a prepared subcommand. See .command() for creating an attached subcommand which inherits settings from its parent.

**Return:** `this`

### createArgument

Factory routine to create a new unattached argument. See .argument() for creating an attached argument, which uses this routine to create the argument. You can override createArgument to return a custom argument.

**Return:** `Argument`

### argument

Define argument syntax for command. The default is that the argument is required, and you can explicitly indicate this with <> around the name. Put [] around the name for an optional argument.

**Return:** `this`

### argument

**Return:** `this`

### addArgument

Define argument syntax for command, adding a prepared argument.

**Return:** `this`

### arguments

Define argument syntax for command, adding multiple at once (without descriptions). See also .argument().

**Return:** `this`

### addHelpCommand

Override default decision whether to add implicit help command.

**Return:** `this`

### hook

Add hook for life cycle event.

**Return:** `this`

### exitOverride

Register callback to use as replacement for calling process.exit.

**Return:** `this`

### createHelp

You can customise the help with a subclass of Help by overriding createHelp, or by overriding Help properties using configureHelp().

**Return:** `Help`

### configureHelp

You can customise the help by overriding Help properties using configureHelp(), or with a subclass of Help by overriding createHelp().

**Return:** `this`

### configureHelp

**Return:** `HelpConfiguration`

### configureOutput

The default output goes to stdout and stderr. You can customise this for special applications. You can also customise the display of errors by overriding outputError. The configuration properties are all functions: `// functions to change where being written, stdout and stderr writeOut(str) writeErr(str) // matching functions to specify width for wrapping help getOutHelpWidth() getErrHelpWidth() // functions based on what is being written out outputError(str, write) // used for displaying errors, and not used for displaying help`

**Return:** `this`

### configureOutput

**Return:** `OutputConfiguration`

### copyInheritedSettings

Copy settings that are useful to have in common across root command and subcommands. (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)

**Return:** `this`

### showHelpAfterError

Display the help or a custom message after an error occurs.

**Return:** `this`

### showSuggestionAfterError

Display suggestion of similar commands for unknown commands, or options for unknown options.

**Return:** `this`

### action

Register callback `fn` for the command.

**Return:** `this`

### option

Define option with `flags`, `description` and optional coercion `fn`. The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. The following are all valid all will output this way when `--help` is used. "-p, --pepper" "-p|--pepper" "-p --pepper"

**Return:** `this`

### option

**Return:** `this`

### option

**Return:** `this`

### requiredOption

Define a required option, which must have a value after parsing. This usually means the option must be specified on the command line. (Otherwise the same as .option().) The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

**Return:** `this`

### requiredOption

**Return:** `this`

### requiredOption

**Return:** `this`

### createOption

Factory routine to create a new unattached option. See .option() for creating an attached option, which uses this routine to create the option. You can override createOption to return a custom option.

**Return:** `Option`

### addOption

Add a prepared Option. See .option() and .requiredOption() for creating and attaching an option in a single call.

**Return:** `this`

### storeOptionsAsProperties

Whether to store option values as properties on command object, or store separately (specify false). In both cases the option values can be accessed using .opts().

**Return:** `this & T`

### storeOptionsAsProperties

**Return:** `this & T`

### storeOptionsAsProperties

**Return:** `this`

### getOptionValue

Retrieve option value.

**Return:** `any`

### setOptionValue

Store option value.

**Return:** `this`

### setOptionValueWithSource

Store option value and where the value came from.

**Return:** `this`

### getOptionValueSource

Retrieve option value source.

**Return:** `OptionValueSource`

### combineFlagAndOptionalValue

Alter parsing of short flags with optional values.

**Return:** `this`

### allowUnknownOption

Allow unknown options on the command line.

**Return:** `this`

### allowExcessArguments

Allow excess command-arguments on the command line. Pass false to make excess arguments an error.

**Return:** `this`

### enablePositionalOptions

Enable positional options. Positional means global options are specified before subcommands which lets subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions. The default behaviour is non-positional and global options may appear anywhere on the command line.

**Return:** `this`

### passThroughOptions

Pass through options that come after command-arguments rather than treat them as command-options, so actual command-options come before command-arguments. Turning this on for a subcommand requires positional options to have been enabled on the program (parent commands). The default behaviour is non-positional and options may appear before or after command-arguments.

**Return:** `this`

### parse

Parse `argv`, setting options and invoking commands when defined. The default expectation is that the arguments are from node and have the application as argv[0] and the script being run in argv[1], with user parameters after that.

**Return:** `this`

### parseAsync

Parse `argv`, setting options and invoking commands when defined. Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise. The default expectation is that the arguments are from node and have the application as argv[0] and the script being run in argv[1], with user parameters after that.

**Return:** `Promise<this>`

### parseOptions

Parse options from `argv` removing known options, and return argv split into operands and unknown arguments. argv => operands, unknown --known kkk op => [op], [] op --known kkk => [op], [] sub --unknown uuu op => [sub], [--unknown uuu op] sub -- --unknown uuu op => [sub --unknown uuu op], []

**Return:** `ParseOptionsResult`

### opts

Return an object containing options as key-value pairs

**Return:** `T`

### description

Set the description.

**Return:** `this`

### description

**Return:** `this`

### description

Get the description.

**Return:** `string`

### alias

Set an alias for the command. You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.

**Return:** `this`

### alias

Get alias for the command.

**Return:** `string`

### aliases

Set aliases for the command. Only the first alias is shown in the auto-generated help.

**Return:** `this`

### aliases

Get aliases for the command.

**Return:** `string[]`

### usage

Set the command usage.

**Return:** `this`

### usage

Get the command usage.

**Return:** `string`

### name

Set the name of the command.

**Return:** `this`

### name

Get the name of the command.

**Return:** `string`

### outputHelp

Output help information for this command. Outputs built-in help, and custom text added using `.addHelpText()`.

**Return:** `void`

### outputHelp

**Return:** `void`

### helpInformation

Return command help documentation.

**Return:** `string`

### helpOption

You can pass in flags and a description to override the help flags and help description for your command. Pass in false to disable the built-in help option.

**Return:** `this`

### help

Output help information and exit. Outputs built-in help, and custom text added using `.addHelpText()`.

**Return:** `never`

### help

**Return:** `never`

### addHelpText

Add additional text to be displayed with the built-in help. Position is 'before' or 'after' to affect just this command, and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

**Return:** `this`

### addHelpText

**Return:** `this`

### on

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

**Return:** `this`
