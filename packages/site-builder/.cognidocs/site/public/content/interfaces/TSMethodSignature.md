# TSMethodSignature

## Properties

| Name             | Type                                                                | Optional | Description |
| :--------------- | :------------------------------------------------------------------ | :------- | :---------- |
| `type`           | `"TSMethodSignature"`                                               | No       | -           |
| `key`            | `Expression`                                                        | No       | -           |
| `typeParameters` | `TSTypeParameterDeclaration \| null`                                | No       | -           |
| `parameters`     | `Array<ArrayPattern \| Identifier \| ObjectPattern \| RestElement>` | No       | -           |
| `typeAnnotation` | `TSTypeAnnotation \| null`                                          | No       | -           |
| `computed`       | `boolean`                                                           | No       | -           |
| `kind`           | `"method" \| "get" \| "set"`                                        | No       | -           |
| `optional`       | `boolean \| null`                                                   | No       | -           |
