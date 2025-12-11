# markdownLineEnding

Check whether a character code is a markdown line ending. A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR). In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE RETURN (CR) are replaced by these virtual characters depending on whether they occurred together.


**Return Type:** `boolean`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `code` | `Code` | No | Code. |