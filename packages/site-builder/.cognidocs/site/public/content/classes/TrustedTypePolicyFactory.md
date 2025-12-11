# TrustedTypePolicyFactory
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `emptyHTML` | `TrustedHTML` | - |
| `emptyScript` | `TrustedScript` | - |
| `defaultPolicy` | `TrustedTypePolicy \| null` | - |

## Methods
### createPolicy
**Return:** `Pick<TrustedTypePolicy<Options>, "name" | Extract<keyof Options, FnNames>>`

### isHTML
**Return:** `value is TrustedHTML`

### isScript
**Return:** `value is TrustedScript`

### isScriptURL
**Return:** `value is TrustedScriptURL`

### getAttributeType
**Return:** `string | null`

### getPropertyType
**Return:** `string | null`
