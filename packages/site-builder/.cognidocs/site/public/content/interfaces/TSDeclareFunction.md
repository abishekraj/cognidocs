# TSDeclareFunction

## Properties

| Name             | Type                                         | Optional | Description |
| :--------------- | :------------------------------------------- | :------- | :---------- |
| `type`           | `"TSDeclareFunction"`                        | No       | -           |
| `id`             | `Identifier \| null`                         | No       | -           |
| `typeParameters` | `TSTypeParameterDeclaration \| Noop \| null` | No       | -           |
| `params`         | `Array<FunctionParameter>`                   | No       | -           |
| `returnType`     | `TSTypeAnnotation \| Noop \| null`           | No       | -           |
| `async`          | `boolean`                                    | No       | -           |
| `declare`        | `boolean \| null`                            | No       | -           |
| `generator`      | `boolean`                                    | No       | -           |
