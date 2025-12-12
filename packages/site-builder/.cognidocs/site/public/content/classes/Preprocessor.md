# Preprocessor

## Properties

| Name                             | Type      | Description |
| :------------------------------- | :-------- | :---------- |
| `handler`                        | `any`     | -           |
| `html`                           | `string`  | -           |
| `pos`                            | `number`  | -           |
| `lastGapPos`                     | `any`     | -           |
| `gapStack`                       | `any`     | -           |
| `skipNextNewLine`                | `any`     | -           |
| `lastChunkWritten`               | `boolean` | -           |
| `endOfChunkHit`                  | `boolean` | -           |
| `bufferWaterline`                | `number`  | -           |
| `isEol`                          | `any`     | -           |
| `lineStartPos`                   | `any`     | -           |
| `droppedBufferSize`              | `number`  | -           |
| `line`                           | `number`  | -           |
| `lastErrOffset`                  | `any`     | -           |
| `_err`                           | `any`     | -           |
| `_addGap`                        | `any`     | -           |
| `_processSurrogate`              | `any`     | -           |
| `_checkForProblematicCharacters` | `any`     | -           |

## Methods

### getError

**Return:** `ParserError`

### willDropParsedChunk

**Return:** `boolean`

### dropParsedChunk

**Return:** `void`

### write

**Return:** `void`

### insertHtmlAtCurrentPos

**Return:** `void`

### startsWith

**Return:** `boolean`

### peek

**Return:** `number`

### advance

**Return:** `number`

### retreat

**Return:** `void`
