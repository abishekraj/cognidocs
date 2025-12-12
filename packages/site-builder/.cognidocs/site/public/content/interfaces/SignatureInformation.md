# SignatureInformation

Represents the signature of something callable. A signature can have a label, like a function-name, a doc-comment, and a set of parameters.

## Properties

| Name              | Type                      | Optional | Description |
| :---------------- | :------------------------ | :------- | :---------- |
| `label`           | `string`                  | No       | -           |
| `documentation`   | `string \| MarkupContent` | Yes      | -           |
| `parameters`      | `ParameterInformation[]`  | Yes      | -           |
| `activeParameter` | `uinteger`                | Yes      | -           |
