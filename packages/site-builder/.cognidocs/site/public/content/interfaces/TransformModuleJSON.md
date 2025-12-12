# TransformModuleJSON

## Properties

| Name                    | Type                               | Optional | Description |
| :---------------------- | :--------------------------------- | :------- | :---------- |
| `ast`                   | `ProgramNode \| undefined`         | Yes      | -           |
| `code`                  | `string`                           | No       | -           |
| `safeVariableNames`     | `Record<string, string> \| null`   | No       | -           |
| `customTransformCache`  | `boolean`                          | No       | -           |
| `originalCode`          | `string`                           | No       | -           |
| `originalSourcemap`     | `ExistingDecodedSourceMap \| null` | No       | -           |
| `sourcemapChain`        | `DecodedSourceMapOrMissing[]`      | No       | -           |
| `transformDependencies` | `string[]`                         | No       | -           |
