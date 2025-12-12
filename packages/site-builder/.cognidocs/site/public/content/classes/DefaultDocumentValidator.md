# DefaultDocumentValidator

## Properties

| Name                 | Type                 | Description |
| :------------------- | :------------------- | :---------- |
| `validationRegistry` | `ValidationRegistry` | -           |
| `metadata`           | `LanguageMetaData`   | -           |

## Methods

### validateDocument

**Return:** `Promise<Diagnostic[]>`

### processLexingErrors

**Return:** `void`

### processParsingErrors

**Return:** `void`

### processLinkingErrors

**Return:** `void`

### validateAst

**Return:** `Promise<Diagnostic[]>`

### validateAstBefore

**Return:** `Promise<void>`

### validateAstNodes

**Return:** `Promise<void>`

### validateAstAfter

**Return:** `Promise<void>`

### toDiagnostic

**Return:** `Diagnostic`

### getSource

**Return:** `string | undefined`
