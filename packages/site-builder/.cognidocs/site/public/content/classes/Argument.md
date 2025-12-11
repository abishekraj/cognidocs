# Argument
## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `description` | `string` | - |
| `required` | `boolean` | - |
| `variadic` | `boolean` | - |

## Methods
### name

Return argument name.

**Return:** `string`

### default

Set the default value, and optionally supply the description to be displayed in the help.

**Return:** `this`

### argParser

Set the custom handler for processing CLI command arguments into argument values.

**Return:** `this`

### choices

Only allow argument value to be one of choices.

**Return:** `this`

### argRequired

Make option-argument required.

**Return:** `this`

### argOptional

Make option-argument optional.

**Return:** `this`
