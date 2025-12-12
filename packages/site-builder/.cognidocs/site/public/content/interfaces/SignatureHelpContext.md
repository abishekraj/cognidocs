# SignatureHelpContext

Additional information about the context in which a signature help request was triggered.

## Properties

| Name                  | Type                       | Optional | Description |
| :-------------------- | :------------------------- | :------- | :---------- |
| `triggerKind`         | `SignatureHelpTriggerKind` | No       | -           |
| `triggerCharacter`    | `string`                   | Yes      | -           |
| `isRetrigger`         | `boolean`                  | No       | -           |
| `activeSignatureHelp` | `SignatureHelp`            | Yes      | -           |
