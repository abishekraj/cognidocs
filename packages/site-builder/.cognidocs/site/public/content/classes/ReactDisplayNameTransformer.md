# ReactDisplayNameTransformer

Implementation of babel-plugin-transform-react-display-name, which adds a display name to usages of React.createClass and createReactClass.

**Extends:** `Transformer`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `rootTransformer` | `RootTransformer` | - |
| `tokens` | `TokenProcessor` | - |
| `importProcessor` | `CJSImportProcessor \| null` | - |
| `options` | `Options` | - |
| `tryProcessCreateClassCall` | `any` | - |
| `findDisplayName` | `any` | - |
| `getDisplayNameFromFilename` | `any` | - |
| `classNeedsDisplayName` | `any` | - |

## Methods
### process
**Return:** `boolean`
