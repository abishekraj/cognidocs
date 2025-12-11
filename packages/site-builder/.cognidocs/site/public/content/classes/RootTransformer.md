# RootTransformer
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `transformers` | `any` | - |
| `nameManager` | `any` | - |
| `tokens` | `any` | - |
| `generatedVariables` | `any` | - |
| `isImportsTransformEnabled` | `any` | - |
| `isReactHotLoaderTransformEnabled` | `any` | - |
| `disableESTransforms` | `any` | - |
| `helperManager` | `any` | - |

## Methods
### transform
**Return:** `RootTransformerResult`

### processBalancedCode
**Return:** `void`

### processToken
**Return:** `void`

### processNamedClass

Skip past a class with a name and return that name.

**Return:** `string`

### processClass
**Return:** `void`

### processClassBody

We want to just handle class fields in all contexts, since TypeScript supports them. Later, when some JS implementations support class fields, this should be made optional.

**Return:** `void`

### makeConstructorInitCode
**Return:** `string`

### processPossibleArrowParamEnd

Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with arrow function return types since they can confuse the parser. In that case, we want to move the close-paren to the same line as the arrow. See https://github.com/alangpierce/sucrase/issues/391 for more details.

**Return:** `boolean`

### processPossibleAsyncArrowWithTypeParams

An async arrow function might be of the form: async < T >() => {} in which case, removing the type parameters will cause a syntax error. Detect this case and move the open-paren earlier.

**Return:** `boolean`

### processPossibleTypeRange
**Return:** `boolean`

### shiftMappings
**Return:** `Array<number | undefined>`
