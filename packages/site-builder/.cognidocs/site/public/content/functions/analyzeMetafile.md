# analyzeMetafile

Pretty-prints an analysis of the metafile JSON to a string. This is just for convenience to be able to match esbuild's pretty-printing exactly. If you want to customize it, you can just inspect the data in the metafile yourself. - Works in node: yes - Works in browser: yes Documentation: https://esbuild.github.io/api/#analyze

**Return Type:** `Promise<string>`

## Parameters

| Name       | Type                     | Optional | Description |
| :--------- | :----------------------- | :------- | :---------- |
| `metafile` | `Metafile \| string`     | No       | -           |
| `options`  | `AnalyzeMetafileOptions` | Yes      | -           |
