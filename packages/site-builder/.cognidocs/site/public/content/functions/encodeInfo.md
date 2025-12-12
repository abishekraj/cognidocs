# encodeInfo

Check whether to encode (as a character reference) the characters surrounding an attention run. Which characters are around an attention run influence whether it works or not. See <https://github.com/orgs/syntax-tree/discussions/60> for more info. See this markdown in a particular renderer to see what works: `markdown |                         | A (letter inside) | B (punctuation inside) | C (whitespace inside) | D (nothing inside) | | ----------------------- | ----------------- | ---------------------- | --------------------- | ------------------ | | 1 (letter outside)      | x*y*z             | x*.*z                  | x* *z                 | x**z               | | 2 (punctuation outside) | .*y*.             | .*.*.                  | .* *.                 | .**.               | | 3 (whitespace outside)  | x *y* z           | x *.* z                | x * * z               | x ** z             | | 4 (nothing outside)     | *x*               | *.*                    | * *                   | **                 | `

**Return Type:** `EncodeSides`

## Parameters

| Name      | Type         | Optional | Description                                                                                     |
| :-------- | :----------- | :------- | :---------------------------------------------------------------------------------------------- |
| `outside` | `number`     | No       | Code point on the outer side of the run.                                                        |
| `inside`  | `number`     | No       | Code point on the inner side of the run.                                                        |
| `marker`  | `"*" \| "_"` | No       | Marker of the run. Underscores are handled more strictly (they form less often) than asterisks. |
