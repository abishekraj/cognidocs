# DiagramDB

Generic Diagram DB that may apply to any diagram type.

## Properties

| Name                | Type                                   | Optional | Description |
| :------------------ | :------------------------------------- | :------- | :---------- |
| `getConfig`         | `() => BaseDiagramConfig \| undefined` | Yes      | -           |
| `clear`             | `() => void`                           | Yes      | -           |
| `setDiagramTitle`   | `(title: string) => void`              | Yes      | -           |
| `getDiagramTitle`   | `() => string`                         | Yes      | -           |
| `setAccTitle`       | `(title: string) => void`              | Yes      | -           |
| `getAccTitle`       | `() => string`                         | Yes      | -           |
| `setAccDescription` | `(description: string) => void`        | Yes      | -           |
| `getAccDescription` | `() => string`                         | Yes      | -           |
| `getDirection`      | `() => string \| undefined`            | Yes      | -           |
| `setDirection`      | `(dir: DiagramOrientation) => void`    | Yes      | -           |
| `setDisplayMode`    | `(title: string) => void`              | Yes      | -           |
| `bindFunctions`     | `(element: Element) => void`           | Yes      | -           |
