# parseMaybeAssign

noIn is used when parsing a for loop so that we don't interpret a following "in" as the binary operatior. isWithinParens is used to indicate that we're parsing something that might be a comma expression or might be an arrow function or might be a Flow type assertion (which requires explicit parens). In these cases, we should allow : and ?: after the initial "left" part.

**Return Type:** `boolean`

## Parameters

| Name             | Type      | Optional | Description |
| :--------------- | :-------- | :------- | :---------- |
| `noIn`           | `boolean` | Yes      | -           |
| `isWithinParens` | `boolean` | Yes      | -           |
