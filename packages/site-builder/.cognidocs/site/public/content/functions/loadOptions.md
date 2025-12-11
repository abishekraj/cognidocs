# loadOptions

Resolve Babel's options fully, resulting in an options object where: * opts.plugins is a full list of Plugin instances. * opts.presets is empty and all presets are flattened into opts. * It can be safely passed back to Babel. Fields like babelrc have been set to false so that later calls to Babel will not make a second attempt to load config files. Plugin instances aren't meant to be manipulated directly, but often callers will serialize this opts to JSON to use it as a cache key representing the options Babel has received. Caching on this isn't 100% guaranteed to invalidate properly, but it is the best we have at the moment.


**Return Type:** `object | null`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `TransformOptions` | Yes | - |