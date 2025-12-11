# EarlyExitException

An exception of this type will be saved in {@link BaseParser.errors} when {@link BaseParser.AT_LEAST_ONE_SEP} or {@link BaseParser.AT_LEAST_ONE_SEP} was called but failed to match even a single iteration.

**Extends:** `Error`

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `context` | `IRecognizerContext` | - |
| `resyncedTokens` | `IToken[]` | - |
| `token` | `IToken` | - |
| `previousToken` | `IToken` | - |
