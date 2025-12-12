# CompletionDetailsRequest

Completion entry details request; value of command field is "completionEntryDetails". Given a file location (file, line, col) and an array of completion entry names return more detailed information for each completion entry.

## Properties

| Name        | Type                             | Optional | Description |
| :---------- | :------------------------------- | :------- | :---------- |
| `command`   | `CommandTypes.CompletionDetails` | No       | -           |
| `arguments` | `CompletionDetailsRequestArgs`   | No       | -           |
