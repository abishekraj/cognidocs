# TableContentMap

Registry of all mdast nodes that can occur where {@link TableContent} is expected. This interface can be augmented to register custom node types: `ts declare module 'mdast' { interface TableContentMap { custom: Custom; } } ` For a union of all table content, see {@link RootContent}.

## Properties

| Name       | Type       | Optional | Description |
| :--------- | :--------- | :------- | :---------- |
| `tableRow` | `TableRow` | No       | -           |
