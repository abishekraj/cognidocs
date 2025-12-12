# IToken

Things to note: - The offset range is inclusive to exclusive. - A lineTerminator as the last character does not effect the Token's line numbering. In other words a new line only starts **after** a line terminator. - A Token's image is it's **literal** text. e.g unicode escaping is untouched.

## Properties

| Name                   | Type        | Optional | Description |
| :--------------------- | :---------- | :------- | :---------- |
| `image`                | `string`    | No       | -           |
| `startOffset`          | `number`    | No       | -           |
| `startLine`            | `number`    | Yes      | -           |
| `startColumn`          | `number`    | Yes      | -           |
| `endOffset`            | `number`    | Yes      | -           |
| `endLine`              | `number`    | Yes      | -           |
| `endColumn`            | `number`    | Yes      | -           |
| `isInsertedInRecovery` | `boolean`   | Yes      | -           |
| `tokenTypeIdx`         | `number`    | No       | -           |
| `tokenType`            | `TokenType` | No       | -           |
| `payload`              | `any`       | Yes      | -           |
