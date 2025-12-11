# ConstructNameMap

Interface of registered constructs. When working on extensions that use new constructs, extend the corresponding interface to register its name: ```ts declare module 'mdast-util-to-markdown' { interface ConstructNameMap { // Register a new construct name (value is used, key should match it). gfmStrikethrough: 'gfmStrikethrough' } } ```

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `autolink` | `'autolink'` | No | - |
| `blockquote` | `'blockquote'` | No | - |
| `codeIndented` | `'codeIndented'` | No | - |
| `codeFenced` | `'codeFenced'` | No | - |
| `codeFencedLangGraveAccent` | `'codeFencedLangGraveAccent'` | No | - |
| `codeFencedLangTilde` | `'codeFencedLangTilde'` | No | - |
| `codeFencedMetaGraveAccent` | `'codeFencedMetaGraveAccent'` | No | - |
| `codeFencedMetaTilde` | `'codeFencedMetaTilde'` | No | - |
| `definition` | `'definition'` | No | - |
| `destinationLiteral` | `'destinationLiteral'` | No | - |
| `destinationRaw` | `'destinationRaw'` | No | - |
| `emphasis` | `'emphasis'` | No | - |
| `headingAtx` | `'headingAtx'` | No | - |
| `headingSetext` | `'headingSetext'` | No | - |
| `image` | `'image'` | No | - |
| `imageReference` | `'imageReference'` | No | - |
| `label` | `'label'` | No | - |
| `link` | `'link'` | No | - |
| `linkReference` | `'linkReference'` | No | - |
| `list` | `'list'` | No | - |
| `listItem` | `'listItem'` | No | - |
| `paragraph` | `'paragraph'` | No | - |
| `phrasing` | `'phrasing'` | No | - |
| `reference` | `'reference'` | No | - |
| `strong` | `'strong'` | No | - |
| `titleApostrophe` | `'titleApostrophe'` | No | - |
| `titleQuote` | `'titleQuote'` | No | - |