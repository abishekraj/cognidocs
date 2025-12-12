# RollupLog

## Properties

| Name       | Type                    | Optional | Description |
| :--------- | :---------------------- | :------- | :---------- |
| `binding`  | `string \| undefined`   | Yes      | -           |
| `cause`    | `unknown \| undefined`  | Yes      | -           |
| `code`     | `string \| undefined`   | Yes      | -           |
| `exporter` | `string \| undefined`   | Yes      | -           |
| `frame`    | `string \| undefined`   | Yes      | -           |
| `hook`     | `string \| undefined`   | Yes      | -           |
| `id`       | `string \| undefined`   | Yes      | -           |
| `ids`      | `string[] \| undefined` | Yes      | -           |
| `loc`      | `{                      |

    	column: number;
    	file?: string \| undefined;
    	line: number;
    }` | Yes | - |

| `message` | `string` | No | - |
| `meta` | `any \| undefined` | Yes | - |
| `names` | `string[] \| undefined` | Yes | - |
| `plugin` | `string \| undefined` | Yes | - |
| `pluginCode` | `unknown \| undefined` | Yes | - |
| `pos` | `number \| undefined` | Yes | - |
| `reexporter` | `string \| undefined` | Yes | - |
| `stack` | `string \| undefined` | Yes | - |
| `url` | `string \| undefined` | Yes | - |
