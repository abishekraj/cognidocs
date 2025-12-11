# LanguageDetail
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `name` | `string` | Yes | - |
| `unicodeRegex` | `boolean` | Yes | - |
| `rawDefinition` | `() => Language` | Yes | - |
| `aliases` | `string[]` | Yes | - |
| `disableAutodetect` | `boolean` | Yes | - |
| `contains` | `(Mode)[]` | No | - |
| `case_insensitive` | `boolean` | Yes | - |
| `keywords` | `string \| string[] \| Record<string, string \| string[] \| RegExp>` | Yes | - |
| `isCompiled` | `boolean` | Yes | - |
| `exports` | `any` | Yes | - |
| `classNameAliases` | `Record<string, string>` | Yes | - |
| `compilerExtensions` | `CompilerExt[]` | Yes | - |
| `supersetOf` | `string` | Yes | - |