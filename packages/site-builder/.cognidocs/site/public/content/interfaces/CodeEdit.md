# CodeEdit

Object found in response messages defining an editing instruction for a span of text in source code.  The effect of this instruction is to replace the text starting at start and ending one character before end with newText. For an insertion, the text span is empty.  For a deletion, newText is empty.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `start` | `Location` | No | - |
| `end` | `Location` | No | - |
| `newText` | `string` | No | - |