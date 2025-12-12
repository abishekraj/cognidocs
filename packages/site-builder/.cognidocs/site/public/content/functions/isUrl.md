# isUrl

Checks if a value has the shape of a WHATWG URL object. Using a symbol or instanceof would not be able to recognize URL objects coming from other implementations (e.g. in Electron), so instead we are checking some well known properties for a lack of a better test. We use `href` and `protocol` as they are the only properties that are easy to retrieve and calculate due to the lazy nature of the getters. We check for auth attribute to distinguish legacy url instance with WHATWG URL instance.

**Return Type:** `fileUrlOrPath is URL`

## Parameters

| Name            | Type      | Optional | Description       |
| :-------------- | :-------- | :------- | :---------------- |
| `fileUrlOrPath` | `unknown` | No       | File path or URL. |
