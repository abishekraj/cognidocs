# Update

## Properties

| Name                     | Type                          | Optional | Description |
| :----------------------- | :---------------------------- | :------- | :---------- |
| `type`                   | `'js-update' \| 'css-update'` | No       | -           |
| `path`                   | `string`                      | No       | -           |
| `acceptedPath`           | `string`                      | No       | -           |
| `timestamp`              | `number`                      | No       | -           |
| `explicitImportRequired` | `boolean`                     | Yes      | -           |
| `isWithinCircularImport` | `boolean`                     | Yes      | -           |
| `ssrInvalidates`         | `string[]`                    | Yes      | -           |
