# PieDB
## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `getConfig` | `() => Required<PieDiagramConfig>` | No | - |
| `clear` | `() => void` | No | - |
| `setDiagramTitle` | `(title: string) => void` | No | - |
| `getDiagramTitle` | `() => string` | No | - |
| `setAccTitle` | `(title: string) => void` | No | - |
| `getAccTitle` | `() => string` | No | - |
| `setAccDescription` | `(description: string) => void` | No | - |
| `getAccDescription` | `() => string` | No | - |
| `addSection` | `({ label, value }: D3Section) => void` | No | - |
| `getSections` | `() => Sections` | No | - |
| `setShowData` | `(toggle: boolean) => void` | No | - |
| `getShowData` | `() => boolean` | No | - |