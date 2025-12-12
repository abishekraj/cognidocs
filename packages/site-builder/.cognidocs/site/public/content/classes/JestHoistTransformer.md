# JestHoistTransformer

Implementation of babel-plugin-jest-hoist, which hoists up some jest method calls above the imports to allow them to override other imports. To preserve line numbers, rather than directly moving the jest.mock code, we wrap each invocation in a function statement and then call the function from the top of the file.

**Extends:** `Transformer`

## Properties

| Name                   | Type                         | Description |
| :--------------------- | :--------------------------- | :---------- |
| `rootTransformer`      | `RootTransformer`            | -           |
| `tokens`               | `TokenProcessor`             | -           |
| `nameManager`          | `NameManager`                | -           |
| `importProcessor`      | `CJSImportProcessor \| null` | -           |
| `hoistedFunctionNames` | `any`                        | -           |
| `extractHoistedCalls`  | `any`                        | -           |

## Methods

### process

**Return:** `boolean`

### getHoistedCode

**Return:** `string`
