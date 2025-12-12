# Tokenizer

## Properties

| Name                    | Type                     | Description |
| :---------------------- | :----------------------- | :---------- |
| `options`               | `TokenizerOptions`       | -           |
| `handler`               | `TokenHandler`           | -           |
| `preprocessor`          | `Preprocessor`           | -           |
| `paused`                | `boolean`                | -           |
| `inLoop`                | `boolean`                | -           |
| `inForeignNode`         | `boolean`                | -           |
| `lastStartTagName`      | `string`                 | -           |
| `active`                | `boolean`                | -           |
| `state`                 | `State`                  | -           |
| `returnState`           | `State`                  | -           |
| `entityDecoder`         | `EntityDecoder`          | -           |
| `entityStartPos`        | `number`                 | -           |
| `consumedAfterSnapshot` | `number`                 | -           |
| `currentLocation`       | `Location \| null`       | -           |
| `currentCharacterToken` | `CharacterToken \| null` | -           |
| `currentToken`          | `Token \| null`          | -           |
| `currentAttr`           | `Attribute`              | -           |

## Methods

### \_err

**Return:** `void`

### getCurrentLocation

**Return:** `Location | null`

### \_runParsingLoop

**Return:** `void`

### pause

**Return:** `void`

### resume

**Return:** `void`

### write

**Return:** `void`

### insertHtmlAtCurrentPos

**Return:** `void`

### \_ensureHibernation

**Return:** `boolean`

### \_consume

**Return:** `number`

### \_advanceBy

**Return:** `void`

### \_consumeSequenceIfMatch

**Return:** `boolean`

### \_createStartTagToken

**Return:** `void`

### \_createEndTagToken

**Return:** `void`

### \_createCommentToken

**Return:** `void`

### \_createDoctypeToken

**Return:** `void`

### \_createCharacterToken

**Return:** `void`

### \_createAttr

**Return:** `void`

### \_leaveAttrName

**Return:** `void`

### \_leaveAttrValue

**Return:** `void`

### prepareToken

**Return:** `void`

### emitCurrentTagToken

**Return:** `void`

### emitCurrentComment

**Return:** `void`

### emitCurrentDoctype

**Return:** `void`

### \_emitCurrentCharacterToken

**Return:** `void`

### \_emitEOFToken

**Return:** `void`

### \_appendCharToCurrentCharacterToken

**Return:** `void`

### \_emitCodePoint

**Return:** `void`

### \_emitChars

**Return:** `void`

### \_startCharacterReference

**Return:** `void`

### \_isCharacterReferenceInAttribute

**Return:** `boolean`

### \_flushCodePointConsumedAsCharacterReference

**Return:** `void`

### \_callState

**Return:** `void`

### \_stateData

**Return:** `void`

### \_stateRcdata

**Return:** `void`

### \_stateRawtext

**Return:** `void`

### \_stateScriptData

**Return:** `void`

### \_statePlaintext

**Return:** `void`

### \_stateTagOpen

**Return:** `void`

### \_stateEndTagOpen

**Return:** `void`

### \_stateTagName

**Return:** `void`

### \_stateRcdataLessThanSign

**Return:** `void`

### \_stateRcdataEndTagOpen

**Return:** `void`

### handleSpecialEndTag

**Return:** `boolean`

### \_stateRcdataEndTagName

**Return:** `void`

### \_stateRawtextLessThanSign

**Return:** `void`

### \_stateRawtextEndTagOpen

**Return:** `void`

### \_stateRawtextEndTagName

**Return:** `void`

### \_stateScriptDataLessThanSign

**Return:** `void`

### \_stateScriptDataEndTagOpen

**Return:** `void`

### \_stateScriptDataEndTagName

**Return:** `void`

### \_stateScriptDataEscapeStart

**Return:** `void`

### \_stateScriptDataEscapeStartDash

**Return:** `void`

### \_stateScriptDataEscaped

**Return:** `void`

### \_stateScriptDataEscapedDash

**Return:** `void`

### \_stateScriptDataEscapedDashDash

**Return:** `void`

### \_stateScriptDataEscapedLessThanSign

**Return:** `void`

### \_stateScriptDataEscapedEndTagOpen

**Return:** `void`

### \_stateScriptDataEscapedEndTagName

**Return:** `void`

### \_stateScriptDataDoubleEscapeStart

**Return:** `void`

### \_stateScriptDataDoubleEscaped

**Return:** `void`

### \_stateScriptDataDoubleEscapedDash

**Return:** `void`

### \_stateScriptDataDoubleEscapedDashDash

**Return:** `void`

### \_stateScriptDataDoubleEscapedLessThanSign

**Return:** `void`

### \_stateScriptDataDoubleEscapeEnd

**Return:** `void`

### \_stateBeforeAttributeName

**Return:** `void`

### \_stateAttributeName

**Return:** `void`

### \_stateAfterAttributeName

**Return:** `void`

### \_stateBeforeAttributeValue

**Return:** `void`

### \_stateAttributeValueDoubleQuoted

**Return:** `void`

### \_stateAttributeValueSingleQuoted

**Return:** `void`

### \_stateAttributeValueUnquoted

**Return:** `void`

### \_stateAfterAttributeValueQuoted

**Return:** `void`

### \_stateSelfClosingStartTag

**Return:** `void`

### \_stateBogusComment

**Return:** `void`

### \_stateMarkupDeclarationOpen

**Return:** `void`

### \_stateCommentStart

**Return:** `void`

### \_stateCommentStartDash

**Return:** `void`

### \_stateComment

**Return:** `void`

### \_stateCommentLessThanSign

**Return:** `void`

### \_stateCommentLessThanSignBang

**Return:** `void`

### \_stateCommentLessThanSignBangDash

**Return:** `void`

### \_stateCommentLessThanSignBangDashDash

**Return:** `void`

### \_stateCommentEndDash

**Return:** `void`

### \_stateCommentEnd

**Return:** `void`

### \_stateCommentEndBang

**Return:** `void`

### \_stateDoctype

**Return:** `void`

### \_stateBeforeDoctypeName

**Return:** `void`

### \_stateDoctypeName

**Return:** `void`

### \_stateAfterDoctypeName

**Return:** `void`

### \_stateAfterDoctypePublicKeyword

**Return:** `void`

### \_stateBeforeDoctypePublicIdentifier

**Return:** `void`

### \_stateDoctypePublicIdentifierDoubleQuoted

**Return:** `void`

### \_stateDoctypePublicIdentifierSingleQuoted

**Return:** `void`

### \_stateAfterDoctypePublicIdentifier

**Return:** `void`

### \_stateBetweenDoctypePublicAndSystemIdentifiers

**Return:** `void`

### \_stateAfterDoctypeSystemKeyword

**Return:** `void`

### \_stateBeforeDoctypeSystemIdentifier

**Return:** `void`

### \_stateDoctypeSystemIdentifierDoubleQuoted

**Return:** `void`

### \_stateDoctypeSystemIdentifierSingleQuoted

**Return:** `void`

### \_stateAfterDoctypeSystemIdentifier

**Return:** `void`

### \_stateBogusDoctype

**Return:** `void`

### \_stateCdataSection

**Return:** `void`

### \_stateCdataSectionBracket

**Return:** `void`

### \_stateCdataSectionEnd

**Return:** `void`

### \_stateCharacterReference

**Return:** `void`

### \_stateAmbiguousAmpersand

**Return:** `void`
