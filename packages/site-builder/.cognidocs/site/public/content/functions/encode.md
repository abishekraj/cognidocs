# encode

Encode only the dangerous HTML characters. This ensures that certain characters which have special meaning in HTML are dealt with. Technically, we can skip `>` and `"` in many cases, but CM includes them.

**Return Type:** `string`

## Parameters

| Name    | Type     | Optional | Description      |
| :------ | :------- | :------- | :--------------- |
| `value` | `string` | No       | Value to encode. |
