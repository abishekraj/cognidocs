# transformSync

A synchronous version of "transform". - Works in node: yes - Works in browser: no Documentation: https://esbuild.github.io/api/#transform

**Return Type:** `TransformResult<T>`

## Parameters

| Name      | Type                             | Optional | Description |
| :-------- | :------------------------------- | :------- | :---------- |
| `input`   | `string \| Uint8Array`           | No       | -           |
| `options` | `SameShape<TransformOptions, T>` | Yes      | -           |
