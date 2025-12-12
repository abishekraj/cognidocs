# DefinitionContentMap

Registry of all mdast nodes that can occur where {@link DefinitionContent} is expected. This interface can be augmented to register custom node types: `ts declare module 'mdast' { interface DefinitionContentMap { custom: Custom; } } ` For a union of all definition content, see {@link RootContent}.

## Properties

| Name                 | Type                 | Optional | Description |
| :------------------- | :------------------- | :------- | :---------- |
| `definition`         | `Definition`         | No       | -           |
| `footnoteDefinition` | `FootnoteDefinition` | No       | -           |
