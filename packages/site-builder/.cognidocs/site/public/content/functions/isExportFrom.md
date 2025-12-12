# isExportFrom

Starting at `export {`, look ahead and return `true` if this is an `export {...} from` statement and `false` if this is a plain multi-export.

**Return Type:** `boolean`

## Parameters

| Name     | Type             | Optional | Description |
| :------- | :--------------- | :------- | :---------- |
| `tokens` | `TokenProcessor` | No       | -           |
