# NotAllInputParsedException

An exception of this type will be saved in {@link BaseParser.errors} when the parser has finished yet there exists remaining input (tokens) that has not processed.

**Extends:** `Error`

## Properties

| Name             | Type                 | Description |
| :--------------- | :------------------- | :---------- |
| `context`        | `IRecognizerContext` | -           |
| `resyncedTokens` | `IToken[]`           | -           |
| `token`          | `IToken`             | -           |
