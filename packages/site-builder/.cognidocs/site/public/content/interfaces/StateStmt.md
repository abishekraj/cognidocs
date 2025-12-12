# StateStmt

## Properties

| Name           | Type                                                                         | Optional | Description |
| :------------- | :--------------------------------------------------------------------------- | :------- | :---------- |
| `stmt`         | `'state' \| 'default'`                                                       | No       | -           |
| `id`           | `string`                                                                     | No       | -           |
| `type`         | `'default' \| 'fork' \| 'join' \| 'choice' \| 'divider' \| 'start' \| 'end'` | No       | -           |
| `description`  | `string`                                                                     | Yes      | -           |
| `descriptions` | `string[]`                                                                   | Yes      | -           |
| `doc`          | `Stmt[]`                                                                     | Yes      | -           |
| `note`         | `Note`                                                                       | Yes      | -           |
| `start`        | `boolean`                                                                    | Yes      | -           |
| `classes`      | `string[]`                                                                   | Yes      | -           |
| `styles`       | `string[]`                                                                   | Yes      | -           |
| `textStyles`   | `string[]`                                                                   | Yes      | -           |
