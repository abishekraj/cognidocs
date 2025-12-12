# toText

Get the plain-text value of a node. ###### Algorithm _ if `tree` is a comment, returns its `value` _ if `tree` is a text, applies normal whitespace collapsing to its `value`, as defined by the CSS Text spec _ if `tree` is a root or element, applies an algorithm similar to the `innerText` getter as defined by HTML ###### Notes > 👉 **Note**: the algorithm acts as if `tree` is being rendered, and as if > we’re a CSS-supporting user agent, with scripting enabled. _ if `tree` is an element that is not displayed (such as a `head`), we’ll still use the `innerText` algorithm instead of switching to `textContent` _ if descendants of `tree` are elements that are not displayed, they are ignored _ CSS is not considered, except for the default user agent style sheet _ a line feed is collapsed instead of ignored in cases where Fullwidth, Wide, or Halfwidth East Asian Width characters are used, the same goes for a case with Chinese, Japanese, or Yi writing systems _ replaced elements (such as `audio`) are treated like non-replaced elements

**Return Type:** `string`

## Parameters

| Name      | Type                                     | Optional | Description             |
| :-------- | :--------------------------------------- | :------- | :---------------------- |
| `tree`    | `Nodes`                                  | No       | Tree to turn into text. |
| `options` | `Readonly<Options> \| null \| undefined` | Yes      | -                       |
