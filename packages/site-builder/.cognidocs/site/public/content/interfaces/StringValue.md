# StringValue

A string value used as a snippet is a template which allows to insert text and to control the editor cursor when insertion happens. A snippet can define tab stops and placeholders with `$1`, `$2` and `${3:foo}`. `$0` defines the final tab stop, it defaults to the end of the snippet. Variables are defined with `$name` and `${name:default value}`.

## Properties

| Name    | Type        | Optional | Description |
| :------ | :---------- | :------- | :---------- |
| `kind`  | `'snippet'` | No       | -           |
| `value` | `string`    | No       | -           |
