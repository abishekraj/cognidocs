# createTokenizer

Create a tokenizer. Tokenizers deal with one type of data (e.g., containers, flow, text). The parser is the object dealing with it all. `initialize` works like other constructs, except that only its `tokenize` function is used, in which case it doesn’t receive an `ok` or `nok`. `from` can be given to set the point before the first character, although when further lines are indented, they must be set with `defineSkip`.


**Return Type:** `TokenizeContext`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `parser` | `ParseContext` | No | Parser. |
| `initialize` | `InitialConstruct` | No | Construct. |
| `from` | `Omit<Point, "_bufferIndex" \| "_index"> \| undefined` | Yes | - |