# MarkdownHooks

Component to render markdown with support for async plugins through hooks. This uses `useEffect` and `useState` hooks. Hooks run on the client and do not immediately render something. For async support on the server, see {@linkcode MarkdownAsync}.


**Return Type:** `ReactElement`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `options` | `Readonly<Options>` | No | Props. |