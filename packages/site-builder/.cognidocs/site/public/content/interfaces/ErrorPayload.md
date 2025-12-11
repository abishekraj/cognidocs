# ErrorPayload
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `type` | `'error'` | No | - |
| `err` | `{
    [name: string]: any
    message: string
    stack: string
    id?: string
    frame?: string
    plugin?: string
    pluginCode?: string
    loc?: {
      file?: string
      line: number
      column: number
    }
  }` | No | - |