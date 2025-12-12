# textHelper

**Return Type:** `Promise<{
    shapeSvg: import("d3-selection").Selection<SVGGElement, unknown, Element | null, unknown>;
    bbox: DOMRect;
}>`

## Parameters

| Name            | Type             | Optional | Description |
| :-------------- | :--------------- | :------- | :---------- |
| `parent`        | `D3Selection<T>` | No       | -           |
| `node`          | `any`            | No       | -           |
| `config`        | `MermaidConfig`  | No       | -           |
| `useHtmlLabels` | `boolean`        | No       | -           |
| `GAP`           | `number`         | Yes      | -           |
