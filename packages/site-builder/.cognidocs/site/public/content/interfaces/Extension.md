# Extension

A syntax extension changes how markdown is tokenized. See: <https://github.com/micromark/micromark#syntaxextension>

## Properties

| Name               | Type                                                           | Optional | Description |
| :----------------- | :------------------------------------------------------------- | :------- | :---------- |
| `attentionMarkers` | `{null?: Array<Code> \| undefined} \| undefined`               | Yes      | -           |
| `contentInitial`   | `ConstructRecord \| undefined`                                 | Yes      | -           |
| `disable`          | `{null?: Array<string> \| undefined} \| undefined`             | Yes      | -           |
| `document`         | `ConstructRecord \| undefined`                                 | Yes      | -           |
| `flowInitial`      | `ConstructRecord \| undefined`                                 | Yes      | -           |
| `flow`             | `ConstructRecord \| undefined`                                 | Yes      | -           |
| `insideSpan`       | `\| {null?: Array<Pick<Construct, 'resolveAll'>> \| undefined} |
| \| undefined`      | Yes                                                            | -        |
| `string`           | `ConstructRecord \| undefined`                                 | Yes      | -           |
| `text`             | `ConstructRecord \| undefined`                                 | Yes      | -           |
