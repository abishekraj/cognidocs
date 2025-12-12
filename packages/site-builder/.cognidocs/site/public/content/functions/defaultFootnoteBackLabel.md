# defaultFootnoteBackLabel

Generate the default label that GitHub uses on backreferences.

**Return Type:** `string`

## Parameters

| Name               | Type     | Optional | Description                                                                     |
| :----------------- | :------- | :------- | :------------------------------------------------------------------------------ |
| `referenceIndex`   | `number` | No       | Index of the definition in the order that they are first referenced, 0-indexed. |
| `rereferenceIndex` | `number` | No       | Index of calls to the same definition, 0-indexed.                               |
