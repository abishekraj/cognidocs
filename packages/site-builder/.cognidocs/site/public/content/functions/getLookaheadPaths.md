# getLookaheadPaths

Computes all lookahead paths for a given production. The result is a three-dimensional array of token types. Accessing this array with the index of an alternative of the given production returns a two-dimensional array. Each entry of this array represents a list of the token types which can occur in this alternative.

**Return Type:** `LookaheadSequence[]`

## Parameters

| Name      | Type | Optional | Description |
| :-------- | :--- | :------- | :---------- |
| `options` | `{   |

occurrence: number;
rule: Rule;
prodType: LookaheadProductionType;
maxLookahead: number;
}` | No | - |
