# mdxjsEsmFromMarkdown

Create an extension for `mdast-util-from-markdown` to enable MDX.js ESM in markdown. When using the micromark syntax extension with `addResult`, nodes will have a `data.estree` field set to an ESTree [`Program`][program] node.


**Return Type:** `FromMarkdownExtension`
