# mockComponent

Pass a mocked component module to this method to augment it with useful methods that allow it to be used as a dummy React component. Instead of rendering as usual, the component will become a simple `<div>` (or other tag if `mockTagName` is provided) containing any provided children.

**Return Type:** `typeof ReactTestUtils`

## Parameters

| Name          | Type                   | Optional | Description |
| :------------ | :--------------------- | :------- | :---------- |
| `mocked`      | `MockedComponentClass` | No       | -           |
| `mockTagName` | `string`               | Yes      | -           |
