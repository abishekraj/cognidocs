# RootContentMap

Registry of all mdast nodes that can occur as children of {@link Root}. > **Note**: {@link Root} does not need to be an entire document. > it can also be a fragment. This interface can be augmented to register custom node types: ``ts declare module 'mdast' { interface RootContentMap { // Allow using toml nodes defined by `remark-frontmatter`. toml: TOML; } } `` For a union of all {@link Root} children, see {@link RootContent}.

## Properties

| Name                 | Type                 | Optional | Description |
| :------------------- | :------------------- | :------- | :---------- |
| `blockquote`         | `Blockquote`         | No       | -           |
| `break`              | `Break`              | No       | -           |
| `code`               | `Code`               | No       | -           |
| `definition`         | `Definition`         | No       | -           |
| `delete`             | `Delete`             | No       | -           |
| `emphasis`           | `Emphasis`           | No       | -           |
| `footnoteDefinition` | `FootnoteDefinition` | No       | -           |
| `footnoteReference`  | `FootnoteReference`  | No       | -           |
| `heading`            | `Heading`            | No       | -           |
| `html`               | `Html`               | No       | -           |
| `image`              | `Image`              | No       | -           |
| `imageReference`     | `ImageReference`     | No       | -           |
| `inlineCode`         | `InlineCode`         | No       | -           |
| `link`               | `Link`               | No       | -           |
| `linkReference`      | `LinkReference`      | No       | -           |
| `list`               | `List`               | No       | -           |
| `listItem`           | `ListItem`           | No       | -           |
| `paragraph`          | `Paragraph`          | No       | -           |
| `strong`             | `Strong`             | No       | -           |
| `table`              | `Table`              | No       | -           |
| `tableCell`          | `TableCell`          | No       | -           |
| `tableRow`           | `TableRow`           | No       | -           |
| `text`               | `Text`               | No       | -           |
| `thematicBreak`      | `ThematicBreak`      | No       | -           |
| `yaml`               | `Yaml`               | No       | -           |
