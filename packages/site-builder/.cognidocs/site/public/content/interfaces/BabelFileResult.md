# BabelFileResult
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `ast` | `t.File \| null \| undefined` | Yes | - |
| `code` | `string \| null \| undefined` | Yes | - |
| `ignored` | `boolean \| undefined` | Yes | - |
| `map` | `\| {
            version: number;
            sources: string[];
            names: string[];
            sourceRoot?: string \| undefined;
            sourcesContent?: string[] \| undefined;
            mappings: string;
            file: string;
        }
        \| null
        \| undefined` | Yes | - |
| `metadata` | `BabelFileMetadata \| undefined` | Yes | - |