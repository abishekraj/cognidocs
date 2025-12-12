# FormatRequest

Format request; value of command field is "format". Return response giving zero or more edit instructions. The edit instructions will be sorted in file order. Applying the edit instructions in reverse to file will result in correctly reformatted text.

## Properties

| Name        | Type                  | Optional | Description |
| :---------- | :-------------------- | :------- | :---------- |
| `command`   | `CommandTypes.Format` | No       | -           |
| `arguments` | `FormatRequestArgs`   | No       | -           |
