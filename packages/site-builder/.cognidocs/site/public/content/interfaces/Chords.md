# Chords

An array of chords, where each chord represents the combined bidirectional flow between two nodes i and j (where i may be equal to j). The chords are based on a (n x n) matrix of flows between nodes. The chords are typically passed to d3.ribbon to display the network relationships. The returned array includes only chord objects for which the value matrix[i][j] or matrix[j][i] is non-zero. Furthermore, the returned array only contains unique chords: a given chord ij represents the bidirectional flow from i to j and from j to i, and does not contain a duplicate chord ji; i and j are chosen such that the chord’s source always represents the larger of matrix[i][j] and matrix[j][i]. In other words, chord.source.index equals chord.target.subindex, chord.source.subindex equals chord.target.index, chord.source.value is greater than or equal to chord.target.value, and chord.source.value is always greater than zero.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `groups` | `ChordGroup[]` | No | - |