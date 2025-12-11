# addSVGa11yTitleDescription

Add an accessible title and/or description element to a chart. The title is usually not displayed and the description is never displayed. The following charts display their title as a visual and accessibility element: gantt.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `svg` | `D3Element` | No | d3 node to insert the a11y title and desc info |
| `a11yTitle` | `string \| undefined` | No | a11y title. undefined or empty strings mean to skip them |
| `a11yDesc` | `string \| undefined` | No | a11y description. undefined or empty strings mean to skip them |
| `baseId` | `string` | No | id used to construct the a11y title and description id |