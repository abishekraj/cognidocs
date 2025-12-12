# Data

Interface of known data that can be supported by all plugins. Typically, options can be given to a specific plugin, but sometimes it makes sense to have information shared with several plugins. For example, a list of HTML elements that are self-closing, which is needed during all phases. To type this, do something like: `ts declare module 'unified' { interface Data { htmlVoidElements?: Array<string> | undefined } } export {} // You may not need this, but it makes sure the file is a module. `

## Properties

| Name       | Type                    | Optional | Description |
| :--------- | :---------------------- | :------- | :---------- |
| `settings` | `Settings \| undefined` | Yes      | -           |
