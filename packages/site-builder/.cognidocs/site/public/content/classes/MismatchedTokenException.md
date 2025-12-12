# MismatchedTokenException

An exception of this type will be saved in {@link BaseParser.errors} when {@link BaseParser.CONSUME} was called but failed to match the expected Token Type.

**Extends:** `Error`

## Properties

| Name             | Type                 | Description |
| :--------------- | :------------------- | :---------- |
| `context`        | `IRecognizerContext` | -           |
| `resyncedTokens` | `IToken[]`           | -           |
| `token`          | `IToken`             | -           |
| `previousToken`  | `IToken`             | -           |
