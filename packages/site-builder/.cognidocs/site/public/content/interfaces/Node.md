# Node

Abstract unist node. The syntactic unit in unist syntax trees are called nodes. This interface is supposed to be extended. If you can use {@link Literal} or {@link Parent}, you should. But for example in markdown, a `thematicBreak` (`***`), is neither literal nor parent, but still a node.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `string` | No | - |
| `data` | `Data \| undefined` | Yes | - |
| `position` | `Position \| undefined` | Yes | - |