# jsdomIt

Test method borrowed from d3 : https://github.com/d3/d3-selection/blob/v3.0.0/test/jsdom.js Fools d3 into thinking it's working in a browser with a real DOM. The DOM is actually an instance of JSDom with monkey-patches for DOM methods that require a rendering engine. The resulting environment is capable of rendering SVGs with the caveat that layouts are completely screwed. This makes it possible to make structural tests instead of mocking everything.


**Return Type:** `void`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `message` | `string` | No | - |
| `run` | `(input: JsdomItInput) => void \| Promise<void>` | No | - |