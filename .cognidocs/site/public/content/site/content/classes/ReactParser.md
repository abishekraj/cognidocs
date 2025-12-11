# ReactParser
## Methods
### parseComponent
**Return:** `Promise<ComponentMetadata[]>`

### isFunctionComponent
**Return:** `boolean`

### isClassComponent
**Return:** `boolean`

### hasJSXReturn
**Return:** `boolean`

### extractFunctionComponent
**Return:** `ComponentMetadata | null`

### extractClassComponent
**Return:** `ComponentMetadata | null`

### extractPropsFromType
**Return:** `PropertyMetadata[]`

### extractPropsFromInterface
**Return:** `PropertyMetadata[]`

### extractHooks
**Return:** `string[]`

### extractJSDoc
**Return:** `{ description?: string; tags?: Record<string, string[]> }`
