# classifyCharacter

Classify whether a code represents whitespace, punctuation, or something else. Used for attention (emphasis, strong), whose sequences can open or close based on the class of surrounding characters. > 👉 **Note**: eof (`null`) is seen as whitespace.

**Return Type:** `typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined`

## Parameters

| Name   | Type   | Optional | Description |
| :----- | :----- | :------- | :---------- |
| `code` | `Code` | No       | Code.       |
