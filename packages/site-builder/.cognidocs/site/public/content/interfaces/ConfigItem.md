# ConfigItem

## Properties

| Name      | Type                                  | Optional | Description |
| :-------- | :------------------------------------ | :------- | :---------- |
| `name`    | `string \| undefined`                 | Yes      | -           |
| `value`   | `object \| ((...args: any[]) => any)` | No       | -           |
| `options` | `object \| false \| undefined`        | Yes      | -           |
| `dirname` | `string`                              | No       | -           |
| `file`    | `\| {                                 |

            /**
             * The file that the user requested, e.g. `"@babel/env"`
             */
            request: string;

            /**
             * The full path of the resolved file, e.g. `"/tmp/node_modules/@babel/preset-env/lib/index.js"`
             */
            resolved: string;
        }
        \| null
        \| undefined` | Yes | - |
