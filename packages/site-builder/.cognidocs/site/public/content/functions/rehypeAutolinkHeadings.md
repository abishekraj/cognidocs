# rehypeAutolinkHeadings

Add links from headings back to themselves. ###### Notes This plugin only applies to headings with `id`s. Use `rehype-slug` to generate `id`s for headings that don’t have them. Several behaviors are supported: *   `'prepend'` (default) — inject link before the heading text *   `'append'` — inject link after the heading text *   `'wrap'` — wrap the whole heading text with the link *   `'before'` — insert link before the heading *   `'after'` — insert link after the heading


**Return Type:** `(tree: Root) => undefined`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `Readonly<Options> \| null \| undefined` | Yes | - |