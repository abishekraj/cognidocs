# JsonSerializeOptions
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `space` | `string \| number` | Yes | - |
| `refText` | `boolean` | Yes | - |
| `sourceText` | `boolean` | Yes | - |
| `textRegions` | `boolean` | Yes | - |
| `comments` | `boolean` | Yes | - |
| `replacer` | `(key: string, value: unknown, defaultReplacer: (key: string, value: unknown) => unknown) => unknown` | Yes | - |
| `uriConverter` | `(uri: URI, reference: Reference) => string` | Yes | - |