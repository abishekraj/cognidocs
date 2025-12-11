# GitGraphDBParseProvider
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `commitType` | `typeof commitType` | No | - |
| `setDirection` | `(dir: DiagramOrientation) => void` | No | - |
| `commit` | `(commitDB: CommitDB) => void` | No | - |
| `branch` | `(branchDB: BranchDB) => void` | No | - |
| `merge` | `(mergeDB: MergeDB) => void` | No | - |
| `cherryPick` | `(cherryPickDB: CherryPickDB) => void` | No | - |
| `checkout` | `(branch: string) => void` | No | - |