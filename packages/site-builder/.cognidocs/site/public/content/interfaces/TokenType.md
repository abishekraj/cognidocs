# TokenType

## Properties

| Name                 | Type                       | Optional | Description |
| :------------------- | :------------------------- | :------- | :---------- |
| `name`               | `string`                   | No       | -           |
| `GROUP`              | `string`                   | Yes      | -           |
| `PATTERN`            | `TokenPattern`             | Yes      | -           |
| `LABEL`              | `string`                   | Yes      | -           |
| `LONGER_ALT`         | `TokenType \| TokenType[]` | Yes      | -           |
| `POP_MODE`           | `boolean`                  | Yes      | -           |
| `PUSH_MODE`          | `string`                   | Yes      | -           |
| `LINE_BREAKS`        | `boolean`                  | Yes      | -           |
| `CATEGORIES`         | `TokenType[]`              | Yes      | -           |
| `tokenTypeIdx`       | `number`                   | Yes      | -           |
| `categoryMatches`    | `number[]`                 | Yes      | -           |
| `categoryMatchesMap` | `{                         |

    [tokType: number]: boolean;

}`| Yes | - |
|`isParent`|`boolean`| Yes | - |
|`START_CHARS_HINT`|`(string \| number)[]` | Yes | - |
