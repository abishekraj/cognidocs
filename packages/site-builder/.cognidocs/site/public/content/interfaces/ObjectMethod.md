# ObjectMethod
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `"ObjectMethod"` | No | - |
| `kind` | `"method" \| "get" \| "set"` | No | - |
| `key` | `Expression \| Identifier \| StringLiteral \| NumericLiteral \| BigIntLiteral` | No | - |
| `params` | `Array<FunctionParameter>` | No | - |
| `body` | `BlockStatement` | No | - |
| `computed` | `boolean` | No | - |
| `generator` | `boolean` | No | - |
| `async` | `boolean` | No | - |
| `decorators` | `Array<Decorator> \| null` | No | - |
| `returnType` | `TypeAnnotation \| TSTypeAnnotation \| Noop \| null` | No | - |
| `typeParameters` | `TypeParameterDeclaration \| TSTypeParameterDeclaration \| Noop \| null` | No | - |