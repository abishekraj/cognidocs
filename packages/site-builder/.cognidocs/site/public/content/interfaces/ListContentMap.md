# ListContentMap

Registry of all mdast nodes that can occur where {@link ListContent} is expected. This interface can be augmented to register custom node types: `ts declare module 'mdast' { interface ListContentMap { custom: Custom; } } ` For a union of all list content, see {@link RootContent}.

## Properties

| Name       | Type       | Optional | Description |
| :--------- | :--------- | :------- | :---------- |
| `listItem` | `ListItem` | No       | -           |
