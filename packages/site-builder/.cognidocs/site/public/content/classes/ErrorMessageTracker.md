# ErrorMessageTracker

Helps tracking error message. Equal occurrences of the same message are only stored once. This class is for example useful if text documents are validated in a loop and equal error message should be folded into one.

## Properties

| Name        | Type  | Description |
| :---------- | :---- | :---------- |
| `_messages` | `any` | -           |

## Methods

### add

Add a message to the tracker.

**Return:** `void`

### sendErrors

Send all tracked messages to the connection's window.

**Return:** `void`
