# ErrorHandler

Trait responsible for runtime parsing errors.

## Properties

| Name                   | Type                          | Description |
| :--------------------- | :---------------------------- | :---------- |
| `_errors`              | `IRecognitionException[]`     | -           |
| `errorMessageProvider` | `IParserErrorMessageProvider` | -           |

## Methods

### initErrorHandler

**Return:** `void`

### SAVE_ERROR

**Return:** `IRecognitionException`

### raiseEarlyExitException

**Return:** `never`

### raiseNoAltException

**Return:** `never`
