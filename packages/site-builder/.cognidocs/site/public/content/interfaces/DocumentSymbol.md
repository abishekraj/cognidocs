# DocumentSymbol

Represents programming constructs like variables, classes, interfaces etc. that appear in a document. Document symbols can be hierarchical and they have two ranges: one that encloses its definition and one that points to its most interesting range, e.g. the range of an identifier.

## Properties

| Name             | Type               | Optional | Description |
| :--------------- | :----------------- | :------- | :---------- |
| `name`           | `string`           | No       | -           |
| `detail`         | `string`           | Yes      | -           |
| `kind`           | `SymbolKind`       | No       | -           |
| `tags`           | `SymbolTag[]`      | Yes      | -           |
| `deprecated`     | `boolean`          | Yes      | -           |
| `range`          | `Range`            | No       | -           |
| `selectionRange` | `Range`            | No       | -           |
| `children`       | `DocumentSymbol[]` | Yes      | -           |
