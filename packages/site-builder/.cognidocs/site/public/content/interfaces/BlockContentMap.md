# BlockContentMap

Registry of all mdast nodes that can occur where {@link BlockContent} is expected. This interface can be augmented to register custom node types: ``ts declare module 'mdast' { interface BlockContentMap { // Allow using MDX ESM nodes defined by `remark-mdx`. mdxjsEsm: MdxjsEsm; } } `` For a union of all block content, see {@link RootContent}.

## Properties

| Name            | Type            | Optional | Description |
| :-------------- | :-------------- | :------- | :---------- |
| `blockquote`    | `Blockquote`    | No       | -           |
| `code`          | `Code`          | No       | -           |
| `heading`       | `Heading`       | No       | -           |
| `html`          | `Html`          | No       | -           |
| `list`          | `List`          | No       | -           |
| `paragraph`     | `Paragraph`     | No       | -           |
| `table`         | `Table`         | No       | -           |
| `thematicBreak` | `ThematicBreak` | No       | -           |
