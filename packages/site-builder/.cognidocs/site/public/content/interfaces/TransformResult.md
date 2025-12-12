# TransformResult

## Properties

| Name            | Type                                                                                                     | Optional | Description |
| :-------------- | :------------------------------------------------------------------------------------------------------- | :------- | :---------- |
| `code`          | `string`                                                                                                 | No       | -           |
| `map`           | `string`                                                                                                 | No       | -           |
| `warnings`      | `Message[]`                                                                                              | No       | -           |
| `mangleCache`   | `Record<string, string \| false> \| (ProvidedOptions['mangleCache'] extends Object ? never : undefined)` | No       | -           |
| `legalComments` | `string \| (ProvidedOptions['legalComments'] extends 'external' ? never : undefined)`                    | No       | -           |
