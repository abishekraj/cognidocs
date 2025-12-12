# useTransformRef

Create a _lense_ on Ref, making it possible to transform ref value

**Return Type:** `RefObject<T>`

## Parameters

| Name          | Type                         | Optional | Description                                                                             |
| :------------ | :--------------------------- | :------- | :-------------------------------------------------------------------------------------- |
| `ref`         | `ReactRef<K>`                | No       | @param {Function} transformer. 👉 Ref would be **NOT updated** on `transformer` update. |
| `transformer` | `(original: T \| null) => K` | No       | -                                                                                       |
