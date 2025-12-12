# quickselect

Rearranges items so that all items in the [left, k] are the smallest. The k-th element will have the (k - left + 1)-th smallest value in [left, right].

**Return Type:** `T[]`

## Parameters

| Name      | Type                                                               | Optional | Description                             |
| :-------- | :----------------------------------------------------------------- | :------- | :-------------------------------------- |
| `array`   | `ArrayLike<T>`                                                     | No       | The array to partially sort (in place). |
| `k`       | `number`                                                           | No       | The middle index for partial sorting.   |
| `left`    | `number`                                                           | Yes      | The left index of the range to sort.    |
| `right`   | `number`                                                           | Yes      | The right index.                        |
| `compare` | `(a: Primitive \| undefined, b: Primitive \| undefined) => number` | Yes      | The compare function.                   |
