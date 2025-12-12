# VirtualTypeAliases

## Properties

| Name                           | Type                                                                        | Optional | Description |
| :----------------------------- | :-------------------------------------------------------------------------- | :------- | :---------- |
| `BindingIdentifier`            | `t.Identifier`                                                              | No       | -           |
| `BlockScoped`                  | `Node`                                                                      | No       | -           |
| `ExistentialTypeParam`         | `t.ExistsTypeAnnotation`                                                    | No       | -           |
| `Flow`                         | `t.Flow \| t.ImportDeclaration \| t.ExportDeclaration \| t.ImportSpecifier` | No       | -           |
| `ForAwaitStatement`            | `t.ForOfStatement`                                                          | No       | -           |
| `Generated`                    | `Node`                                                                      | No       | -           |
| `NumericLiteralTypeAnnotation` | `t.NumberLiteralTypeAnnotation`                                             | No       | -           |
| `Pure`                         | `Node`                                                                      | No       | -           |
| `Referenced`                   | `Node`                                                                      | No       | -           |
| `ReferencedIdentifier`         | `t.Identifier \| t.JSXIdentifier`                                           | No       | -           |
| `ReferencedMemberExpression`   | `t.MemberExpression`                                                        | No       | -           |
| `RestProperty`                 | `t.RestElement`                                                             | No       | -           |
| `Scope`                        | `t.Scopable \| t.Pattern`                                                   | No       | -           |
| `SpreadProperty`               | `t.RestElement`                                                             | No       | -           |
| `User`                         | `Node`                                                                      | No       | -           |
| `Var`                          | `t.VariableDeclaration`                                                     | No       | -           |
