# buildHierarchy

Converts a flat array of treemap items into a hierarchical structure


**Return Type:** `TreemapNode[]`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `items` | `{
    level: number;
    name: string;
    type: string;
    value?: number;
    classSelector?: string;
    cssCompiledStyles?: string;
}[]` | No | Array of flat treemap items with level, name, type, and optional value |