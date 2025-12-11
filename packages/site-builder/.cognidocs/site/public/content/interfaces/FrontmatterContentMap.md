# FrontmatterContentMap

Registry of all mdast nodes that can occur where {@link FrontmatterContent} is expected. This interface can be augmented to register custom node types: ```ts declare module 'mdast' { interface FrontmatterContentMap { // Allow using toml nodes defined by `remark-frontmatter`. toml: TOML; } } ``` For a union of all frontmatter content, see {@link RootContent}.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `yaml` | `Yaml` | No | - |