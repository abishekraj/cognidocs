# sanitizeUri

Make a value safe for injection as a URL. This encodes unsafe characters with percent-encoding and skips already encoded sequences (see `normalizeUri`). Further unsafe characters are encoded as character references (see `micromark-util-encode`). A regex of allowed protocols can be given, in which case the URL is sanitized. For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or `/^https?$/i` for `img[src]` (this is what `github.com` allows). If the URL includes an unknown protocol (one not matched by `protocol`, such as a dangerous example, `javascript:`), the value is ignored.


**Return Type:** `string`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `url` | `string \| null \| undefined` | No | URI to sanitize. |
| `protocol` | `RegExp \| null \| undefined` | Yes | - |