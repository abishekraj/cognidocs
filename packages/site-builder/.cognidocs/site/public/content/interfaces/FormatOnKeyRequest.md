# FormatOnKeyRequest

Format on key request; value of command field is "formatonkey". Given file location and key typed (as string), return response giving zero or more edit instructions. The edit instructions will be sorted in file order. Applying the edit instructions in reverse to file will result in correctly reformatted text.

## Properties

| Name        | Type                       | Optional | Description |
| :---------- | :------------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Formatonkey` | No       | -           |
| `arguments` | `FormatOnKeyRequestArgs`   | No       | -           |
