# NoViableAltException

An exception of this type will be saved in {@link BaseParser.errors} when {@link BaseParser.OR} was called yet none of the possible alternatives could be matched.

**Extends:** `Error`

## Properties

| Name             | Type                 | Description |
| :--------------- | :------------------- | :---------- |
| `context`        | `IRecognizerContext` | -           |
| `resyncedTokens` | `IToken[]`           | -           |
| `token`          | `IToken`             | -           |
| `previousToken`  | `IToken`             | -           |
