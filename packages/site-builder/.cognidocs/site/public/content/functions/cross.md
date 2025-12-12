# cross

Computes the Cartesian product of any number of iterables. When called **without** a reducer, the result is an array of tuples, where each tuple contains one element from each input iterable.

**Return Type:** `T[]`

## Parameters

| Name        | Type                                 | Optional | Description                                                |
| :---------- | :----------------------------------- | :------- | :--------------------------------------------------------- |
| `iterables` | `{ [K in keyof T]: Iterable<T[K]> }` | No       | Two or more iterables to combine into a Cartesian product. |
