# HighlightResult

## Properties

| Name          | Type                                   | Optional | Description |
| :------------ | :------------------------------------- | :------- | :---------- |
| `code`        | `string`                               | Yes      | -           |
| `relevance`   | `number`                               | No       | -           |
| `value`       | `string`                               | No       | -           |
| `language`    | `string`                               | Yes      | -           |
| `illegal`     | `boolean`                              | No       | -           |
| `errorRaised` | `Error`                                | Yes      | -           |
| `secondBest`  | `Omit<HighlightResult, 'second_best'>` | Yes      | -           |
| `_illegalBy`  | `illegalData`                          | Yes      | -           |
| `_emitter`    | `Emitter`                              | No       | -           |
| `_top`        | `Language \| CompiledMode`             | Yes      | -           |
