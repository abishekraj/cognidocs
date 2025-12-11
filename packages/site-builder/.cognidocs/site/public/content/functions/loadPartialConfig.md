# loadPartialConfig

To allow systems to easily manipulate and validate a user's config, this function resolves the plugins and presets and proceeds no further. The expectation is that callers will take the config's .options, manipulate it as then see fit and pass it back to Babel again. * `babelrc: string | void` - The path of the `.babelrc` file, if there was one. * `babelignore: string | void` - The path of the `.babelignore` file, if there was one. * `options: ValidatedOptions` - The partially resolved options, which can be manipulated and passed back to Babel again. * `plugins: Array<ConfigItem>` - See below. * `presets: Array<ConfigItem>` - See below. * It can be safely passed back to Babel. Fields like `babelrc` have been set to false so that later calls to Babel will not make a second attempt to load config files. `ConfigItem` instances expose properties to introspect the values, but each item should be treated as immutable. If changes are desired, the item should be removed from the list and replaced with either a normal Babel config value, or with a replacement item created by `babel.createConfigItem`. See that function for information about `ConfigItem` fields.


**Return Type:** `Readonly<PartialConfig> | null`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `TransformOptions` | Yes | - |