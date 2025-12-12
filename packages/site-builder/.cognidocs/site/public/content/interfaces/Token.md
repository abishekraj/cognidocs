# Token

A token: a span of chunks. Tokens are what the core of micromark produces: the built in HTML compiler or other tools can turn them into different things. Tokens are essentially names attached to a slice of chunks, such as `lineEndingBlank` for certain line endings, or `codeFenced` for a whole fenced code. Sometimes, more info is attached to tokens, such as `_open` and `_close` by `attention` (strong, emphasis) to signal whether the sequence can open or close an attention run. Linked tokens are used because outer constructs are parsed first. Take for example: `markdown > *a b*. ` 1. The block quote marker and the space after it is parsed first 2. The rest of the line is a `chunkFlow` token 3. The two spaces on the second line are a `linePrefix` 4. The rest of the line is another `chunkFlow` token The two `chunkFlow` tokens are linked together. The chunks they span are then passed through the flow tokenizer.

## Properties

| Name                          | Type                           | Optional | Description |
| :---------------------------- | :----------------------------- | :------- | :---------- |
| `type`                        | `TokenType`                    | No       | -           |
| `start`                       | `Point`                        | No       | -           |
| `end`                         | `Point`                        | No       | -           |
| `previous`                    | `Token \| undefined`           | Yes      | -           |
| `next`                        | `Token \| undefined`           | Yes      | -           |
| `contentType`                 | `ContentType \| undefined`     | Yes      | -           |
| `_contentTypeTextTrailing`    | `boolean \| undefined`         | Yes      | -           |
| `_tokenizer`                  | `TokenizeContext \| undefined` | Yes      | -           |
| `_open`                       | `boolean \| undefined`         | Yes      | -           |
| `_close`                      | `boolean \| undefined`         | Yes      | -           |
| `_isInFirstContentOfListItem` | `boolean \| undefined`         | Yes      | -           |
| `_container`                  | `boolean \| undefined`         | Yes      | -           |
| `_loose`                      | `boolean \| undefined`         | Yes      | -           |
| `_inactive`                   | `boolean \| undefined`         | Yes      | -           |
| `_balanced`                   | `boolean \| undefined`         | Yes      | -           |
