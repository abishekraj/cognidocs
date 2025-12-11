# Construct

An object describing how to parse a markdown construct.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `add` | `'after' \| 'before' \| undefined` | Yes | - |
| `concrete` | `boolean \| undefined` | Yes | - |
| `continuation` | `Construct \| undefined` | Yes | - |
| `exit` | `Exiter \| undefined` | Yes | - |
| `name` | `string \| undefined` | Yes | - |
| `partial` | `boolean \| undefined` | Yes | - |
| `previous` | `Previous \| undefined` | Yes | - |
| `resolveAll` | `Resolver \| undefined` | Yes | - |
| `resolveTo` | `Resolver \| undefined` | Yes | - |
| `resolve` | `Resolver \| undefined` | Yes | - |
| `tokenize` | `Tokenizer` | No | - |