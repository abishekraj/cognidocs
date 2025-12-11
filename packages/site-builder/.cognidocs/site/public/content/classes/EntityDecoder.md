# EntityDecoder

Token decoder with support of writing partial entities.

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `state` | `any` | - |
| `consumed` | `any` | - |
| `result` | `any` | - |
| `treeIndex` | `any` | - |
| `excess` | `any` | - |
| `decodeMode` | `any` | - |

## Methods
### startEntity
**Return:** `void`

### write

Write an entity to the decoder. This can be called multiple times with partial entities. If the entity is incomplete, the decoder will return -1. Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the entity is incomplete, and resume when the next string is written.

**Return:** `number`

### stateNumericStart

Switches between the numeric decimal and hexadecimal states. Equivalent to the `Numeric character reference state` in the HTML spec.

**Return:** `number`

### addToNumericResult
**Return:** `void`

### stateNumericHex

Parses a hexadecimal numeric entity. Equivalent to the `Hexademical character reference state` in the HTML spec.

**Return:** `number`

### stateNumericDecimal

Parses a decimal numeric entity. Equivalent to the `Decimal character reference state` in the HTML spec.

**Return:** `number`

### emitNumericEntity

Validate and emit a numeric entity. Implements the logic from the `Hexademical character reference start state` and `Numeric character reference end state` in the HTML spec.

**Return:** `number`

### stateNamedEntity

Parses a named entity. Equivalent to the `Named character reference state` in the HTML spec.

**Return:** `number`

### emitNotTerminatedNamedEntity

Emit a named entity that was not terminated with a semicolon.

**Return:** `number`

### emitNamedEntityData

Emit a named entity.

**Return:** `number`

### end

Signal to the parser that the end of the input was reached. Remaining data will be emitted and relevant errors will be produced.

**Return:** `number`
