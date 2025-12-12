# addMapping

A high-level API to associate a generated position with an original source position. Line is 1-based, but column is 0-based, due to legacy behavior in `source-map` library.

**Return Type:** `void`

## Parameters

| Name      | Type         | Optional | Description |
| :-------- | :----------- | :------- | :---------- |
| `map`     | `GenMapping` | No       | -           |
| `mapping` | `{           |

    generated: Pos;
    source?: null;
    original?: null;
    name?: null;
    content?: null;

}` | No | - |
