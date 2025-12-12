# interpolateString

Returns an interpolator between the two strings `a` and `b`. The string interpolator finds numbers embedded in `a` and `b`, where each number is of the form understood by JavaScript. A few examples of numbers that will be detected within a string: `-1`, `42`, `3.14159`, and `6.0221413e+23`. For each number embedded in `b`, the interpolator will attempt to find a corresponding number in `a`. If a corresponding number is found, a numeric interpolator is created using `interpolateNumber`. The remaining parts of the string `b` are used as a template. For example, if `a` is `"300 12px sans-serif"`, and `b` is `"500 36px Comic-Sans"`, two embedded numbers are found. The remaining static parts (of string `b`) are a space between the two numbers (`" "`), and the suffix (`"px Comic-Sans"`). The result of the interpolator at `t` = 0.5 is `"400 24px Comic-Sans"`.

**Return Type:** `(t: number) => string`

## Parameters

| Name | Type                               | Optional | Description |
| :--- | :--------------------------------- | :------- | :---------- |
| `a`  | `string \| { toString(): string }` | No       | -           |
| `b`  | `string \| { toString(): string }` | No       | -           |
