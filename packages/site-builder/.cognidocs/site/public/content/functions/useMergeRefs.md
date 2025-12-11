# useMergeRefs

Merges two or more refs together providing a single interface to set their value


**Return Type:** `React.MutableRefObject<T | null>`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `refs` | `ReactRef<T>[]` | No | @returns {MutableRefObject} - a new ref, which translates all changes to {refs} |
| `defaultValue` | `T` | Yes | - |