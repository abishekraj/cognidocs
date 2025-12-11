# GitGraphDBRenderProvider
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `prettyPrint` | `() => void` | No | - |
| `clear` | `() => void` | No | - |
| `getBranchesAsObjArray` | `() => {
        name: string;
    }[]` | No | - |
| `getBranches` | `() => Map<string, string \| null>` | No | - |
| `getCommits` | `() => Map<string, Commit>` | No | - |
| `getCommitsArray` | `() => Commit[]` | No | - |
| `getCurrentBranch` | `() => string` | No | - |
| `getDirection` | `() => DiagramOrientation` | No | - |
| `getHead` | `() => Commit \| null` | No | - |
| `getDiagramTitle` | `() => string` | No | - |