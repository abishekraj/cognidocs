# DocumentHighlightsRequest

Get document highlights request; value of command field is "documentHighlights". Return response giving spans that are relevant in the file at a given line and column.

## Properties

| Name        | Type                              | Optional | Description |
| :---------- | :-------------------------------- | :------- | :---------- |
| `command`   | `CommandTypes.DocumentHighlights` | No       | -           |
| `arguments` | `DocumentHighlightsRequestArgs`   | No       | -           |
