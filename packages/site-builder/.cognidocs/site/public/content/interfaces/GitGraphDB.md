# GitGraphDB

## Properties

| Name                    | Type                                   | Optional | Description |
| :---------------------- | :------------------------------------- | :------- | :---------- |
| `commitType`            | `typeof commitType`                    | No       | -           |
| `setDirection`          | `(dir: DiagramOrientation) => void`    | No       | -           |
| `setOptions`            | `(rawOptString: string) => void`       | No       | -           |
| `getOptions`            | `() => any`                            | No       | -           |
| `commit`                | `(commitDB: CommitDB) => void`         | No       | -           |
| `branch`                | `(branchDB: BranchDB) => void`         | No       | -           |
| `merge`                 | `(mergeDB: MergeDB) => void`           | No       | -           |
| `cherryPick`            | `(cherryPickDB: CherryPickDB) => void` | No       | -           |
| `checkout`              | `(branch: string) => void`             | No       | -           |
| `prettyPrint`           | `() => void`                           | No       | -           |
| `clear`                 | `() => void`                           | No       | -           |
| `getBranchesAsObjArray` | `() => {                               |

        name: string;
    }[]` | No | - |

| `getBranches` | `() => Map<string, string \| null>` | No | - |
| `getCommits` | `() => Map<string, Commit>` | No | - |
| `getCommitsArray` | `() => Commit[]` | No | - |
| `getCurrentBranch` | `() => string` | No | - |
| `getDirection` | `() => DiagramOrientation` | No | - |
| `getHead` | `() => Commit \| null` | No | - |
