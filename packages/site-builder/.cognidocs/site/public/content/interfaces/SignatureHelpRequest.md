# SignatureHelpRequest

Signature help request; value of command field is "signatureHelp". Given a file location (file, line, col), return the signature help.

## Properties

| Name        | Type                         | Optional | Description |
| :---------- | :--------------------------- | :------- | :---------- |
| `command`   | `CommandTypes.SignatureHelp` | No       | -           |
| `arguments` | `SignatureHelpRequestArgs`   | No       | -           |
