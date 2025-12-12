# mdxExpressionFromMarkdown

Create an extension for `mdast-util-from-markdown` to enable MDX expressions in markdown. When using the micromark syntax extension with `addResult`, nodes will have a `data.estree` field set to an ESTree `Program` node.

**Return Type:** `FromMarkdownExtension`
