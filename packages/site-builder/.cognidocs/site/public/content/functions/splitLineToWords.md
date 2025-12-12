# splitLineToWords

Splits a string into words by using `Intl.Segmenter` if available, or splitting by ' '. `Intl.Segmenter` uses the default locale, which might be different across browsers.

**Return Type:** `string[]`

## Parameters

| Name   | Type     | Optional | Description |
| :----- | :------- | :------- | :---------- |
| `text` | `string` | No       | -           |
