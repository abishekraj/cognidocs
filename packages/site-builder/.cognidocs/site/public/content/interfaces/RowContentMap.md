# RowContentMap

Registry of all mdast nodes that can occur where {@link RowContent} is expected. This interface can be augmented to register custom node types: ```ts declare module 'mdast' { interface RowContentMap { custom: Custom; } } ``` For a union of all row content, see {@link RootContent}.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `tableCell` | `TableCell` | No | - |