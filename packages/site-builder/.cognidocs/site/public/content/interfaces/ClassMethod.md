# ClassMethod

## Properties

| Name             | Type                                                                           | Optional | Description |
| :--------------- | :----------------------------------------------------------------------------- | :------- | :---------- |
| `type`           | `"ClassMethod"`                                                                | No       | -           |
| `kind`           | `"get" \| "set" \| "method" \| "constructor"`                                  | No       | -           |
| `key`            | `Identifier \| StringLiteral \| NumericLiteral \| BigIntLiteral \| Expression` | No       | -           |
| `params`         | `Array<FunctionParameter \| TSParameterProperty>`                              | No       | -           |
| `body`           | `BlockStatement`                                                               | No       | -           |
| `computed`       | `boolean`                                                                      | No       | -           |
| `static`         | `boolean`                                                                      | No       | -           |
| `generator`      | `boolean`                                                                      | No       | -           |
| `async`          | `boolean`                                                                      | No       | -           |
| `abstract`       | `boolean \| null`                                                              | No       | -           |
| `access`         | `"public" \| "private" \| "protected" \| null`                                 | No       | -           |
| `accessibility`  | `"public" \| "private" \| "protected" \| null`                                 | No       | -           |
| `decorators`     | `Array<Decorator> \| null`                                                     | No       | -           |
| `optional`       | `boolean \| null`                                                              | No       | -           |
| `override`       | `boolean`                                                                      | No       | -           |
| `returnType`     | `TypeAnnotation \| TSTypeAnnotation \| Noop \| null`                           | No       | -           |
| `typeParameters` | `TypeParameterDeclaration \| TSTypeParameterDeclaration \| Noop \| null`       | No       | -           |
