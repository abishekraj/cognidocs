# parseSelector

Create a hast element from a simple CSS selector.

**Return Type:** `import("hast").Element & {
    tagName: ExtractTagName<Selector, DefaultTagName>;
}`

## Parameters

| Name             | Type                                  | Optional | Description |
| :--------------- | :------------------------------------ | :------- | :---------- |
| `selector`       | `Selector \| null \| undefined`       | Yes      | -           |
| `defaultTagName` | `DefaultTagName \| null \| undefined` | Yes      | -           |
