# ClassMember

Parses and stores class diagram member variables/methods.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `id` | `string` | - |
| `cssStyle` | `string` | - |
| `memberType` | `'method' \| 'attribute'` | - |
| `visibility` | `Visibility` | - |
| `text` | `string` | - |
| `classifier` | `string` | - |
| `parameters` | `string` | - |
| `returnType` | `string` | - |

## Methods
### getDisplayDetails
**Return:** `{
        displayText: string;
        cssStyle: string;
    }`

### parseMember
**Return:** `void`

### parseClassifier
**Return:** `"" | "font-style:italic;" | "text-decoration:underline;"`
