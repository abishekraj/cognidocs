# PhrasingContentMap

Registry of all mdast nodes that can occur where {@link PhrasingContent} is expected. This interface can be augmented to register custom node types: ```ts declare module 'mdast' { interface PhrasingContentMap { // Allow using MDX JSX (text) nodes defined by `remark-mdx`. mdxJsxTextElement: MDXJSXTextElement; } } ``` For a union of all phrasing content, see {@link RootContent}.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `break` | `Break` | No | - |
| `delete` | `Delete` | No | - |
| `emphasis` | `Emphasis` | No | - |
| `footnoteReference` | `FootnoteReference` | No | - |
| `html` | `Html` | No | - |
| `image` | `Image` | No | - |
| `imageReference` | `ImageReference` | No | - |
| `inlineCode` | `InlineCode` | No | - |
| `link` | `Link` | No | - |
| `linkReference` | `LinkReference` | No | - |
| `strong` | `Strong` | No | - |
| `text` | `Text` | No | - |