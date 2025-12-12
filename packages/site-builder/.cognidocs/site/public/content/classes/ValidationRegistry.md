# ValidationRegistry

## Properties

| Name            | Type                      | Description |
| :-------------- | :------------------------ | :---------- |
| `entries`       | `any`                     | -           |
| `reflection`    | `AstReflection`           | -           |
| `entriesBefore` | `ValidationPreparation[]` | -           |
| `entriesAfter`  | `ValidationPreparation[]` | -           |

## Methods

### register

**Return:** `void`

### wrapValidationException

**Return:** `ValidationCheck`

### handleException

**Return:** `Promise<void>`

### addEntry

**Return:** `void`

### getChecks

**Return:** `Stream<ValidationCheck>`

### registerBeforeDocument

**Return:** `void`

### registerAfterDocument

**Return:** `void`

### wrapPreparationException

**Return:** `ValidationPreparation`
