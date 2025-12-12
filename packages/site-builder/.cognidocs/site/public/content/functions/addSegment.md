# addSegment

A low-level API to associate a generated position with an original source position. Line and column here are 0-based, unlike `addMapping`.

**Return Type:** `void`

## Parameters

| Name           | Type         | Optional | Description |
| :------------- | :----------- | :------- | :---------- |
| `map`          | `GenMapping` | No       | -           |
| `genLine`      | `number`     | No       | -           |
| `genColumn`    | `number`     | No       | -           |
| `source`       | `null`       | Yes      | -           |
| `sourceLine`   | `null`       | Yes      | -           |
| `sourceColumn` | `null`       | Yes      | -           |
| `name`         | `null`       | Yes      | -           |
| `content`      | `null`       | Yes      | -           |
