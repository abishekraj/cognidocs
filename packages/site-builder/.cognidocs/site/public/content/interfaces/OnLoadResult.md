# OnLoadResult

## Properties

| Name         | Type                   | Optional | Description |
| :----------- | :--------------------- | :------- | :---------- |
| `pluginName` | `string`               | Yes      | -           |
| `errors`     | `PartialMessage[]`     | Yes      | -           |
| `warnings`   | `PartialMessage[]`     | Yes      | -           |
| `contents`   | `string \| Uint8Array` | Yes      | -           |
| `resolveDir` | `string`               | Yes      | -           |
| `loader`     | `Loader`               | Yes      | -           |
| `pluginData` | `any`                  | Yes      | -           |
| `watchFiles` | `string[]`             | Yes      | -           |
| `watchDirs`  | `string[]`             | Yes      | -           |
