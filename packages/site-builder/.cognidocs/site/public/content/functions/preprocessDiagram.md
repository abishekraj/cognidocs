# preprocessDiagram

Preprocess the given code by cleaning it up, extracting front matter and directives, cleaning and merging configuration, and removing comments.


**Return Type:** `{
    code: string;
    title: string | undefined;
    config: import("./config.type.js").MermaidConfig;
}`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `code` | `string` | No | The code to preprocess. |