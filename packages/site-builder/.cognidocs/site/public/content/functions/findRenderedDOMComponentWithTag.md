# findRenderedDOMComponentWithTag

Like `scryRenderedDOMComponentsWithTag()` but expects there to be one result, and returns that one result, or throws exception if there is any other number of matches besides one.

**Return Type:** `Element`

## Parameters

| Name      | Type             | Optional | Description |
| :-------- | :--------------- | :------- | :---------- |
| `root`    | `Component<any>` | No       | -           |
| `tagName` | `string`         | No       | -           |
