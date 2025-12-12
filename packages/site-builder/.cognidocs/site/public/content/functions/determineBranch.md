# determineBranch

Determines the branch of the current node that is taken given the current character. This function is used to traverse the trie.

**Return Type:** `number`

## Parameters

| Name         | Type          | Optional | Description            |
| :----------- | :------------ | :------- | :--------------------- |
| `decodeTree` | `Uint16Array` | No       | The trie.              |
| `current`    | `number`      | No       | The current node.      |
| `nodeIndex`  | `number`      | No       | -                      |
| `char`       | `number`      | No       | The current character. |
