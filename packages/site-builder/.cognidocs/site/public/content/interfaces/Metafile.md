# Metafile

## Properties

| Name     | Type | Optional | Description |
| :------- | :--- | :------- | :---------- |
| `inputs` | `{   |

    [path: string]: {
      bytes: number
      imports: {
        path: string
        kind: ImportKind
        external?: boolean
        original?: string
        with?: Record<string, string>
      }[]
      format?: 'cjs' \| 'esm'
      with?: Record<string, string>
    }

}`| No | - |
|`outputs`|`{
[path: string]: {
bytes: number
inputs: {
[path: string]: {
bytesInOutput: number
}
}
imports: {
path: string
kind: ImportKind \| 'file-loader'
external?: boolean
}[]
exports: string[]
entryPoint?: string
cssBundle?: string
}
}` | No | - |
