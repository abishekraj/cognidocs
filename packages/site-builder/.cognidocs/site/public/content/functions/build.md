# build

This function invokes the "esbuild" command-line tool for you. It returns a promise that either resolves with a "BuildResult" object or rejects with a "BuildFailure" object. - Works in node: yes - Works in browser: yes Documentation: https://esbuild.github.io/api/#build


**Return Type:** `Promise<BuildResult<T>>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `SameShape<BuildOptions, T>` | No | - |