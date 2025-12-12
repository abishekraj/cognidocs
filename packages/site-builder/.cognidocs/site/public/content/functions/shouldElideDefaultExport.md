# shouldElideDefaultExport

Common method sharing code between CJS and ESM cases, since they're the same here.

**Return Type:** `boolean`

## Parameters

| Name                           | Type              | Optional | Description |
| :----------------------------- | :---------------- | :------- | :---------- |
| `isTypeScriptTransformEnabled` | `boolean`         | No       | -           |
| `keepUnusedImports`            | `boolean`         | No       | -           |
| `tokens`                       | `TokenProcessor`  | No       | -           |
| `declarationInfo`              | `DeclarationInfo` | No       | -           |
