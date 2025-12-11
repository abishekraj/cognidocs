# URI

Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986. This class is a simple parser which creates the basic component parts (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation and encoding. ```txt foo://example.com:8042/over/there?name=ferret#nose \_/   \______________/\_________/ \_________/ \__/ |           |            |            |        | scheme     authority       path        query   fragment |   _____________________|__ / \ /                        \ urn:example:animal:ferret:nose ```

## Properties
| Name | Type | Description |
| :--- | :--- | :---------- |
| `scheme` | `string` | - |
| `authority` | `string` | - |
| `path` | `string` | - |
| `query` | `string` | - |
| `fragment` | `string` | - |

## Methods
### isUri
**Return:** `thing is URI`

### with
**Return:** `URI`

### parse

Creates a new URI from a string, e.g. `http://www.example.com/some/path`, `file:///usr/home`, or `scheme:with/path`.

**Return:** `URI`

### file

Creates a new URI from a file system path, e.g. `c:\my\files`, `/usr/home`, or `\\server\share\some\path`. The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as** `URI.parse('file://' + path)` because the path might contain characters that are interpreted (# and ?). See the following sample: ```ts

**Return:** `URI`

### from
**Return:** `URI`

### toString

Creates a string representation for this URI. It's guaranteed that calling `URI.parse` with the result of this function creates an URI which is equal to this URI. * The result shall *not* be used for display purposes but for externalization or transport. * The result will be encoded using the percentage encoding and encoding happens mostly ignore the scheme-specific encoding rules.

**Return:** `string`

### toJSON
**Return:** `UriComponents`

### revive
**Return:** `URI`

### revive
**Return:** `URI | undefined`

### revive
**Return:** `URI | null`

### revive
**Return:** `URI | undefined | null`
