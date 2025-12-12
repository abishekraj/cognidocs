# KatexOptions

Options for `katex.render` and `katex.renderToString`.

## Properties

| Name                             | Type                                                                               | Optional | Description |
| :------------------------------- | :--------------------------------------------------------------------------------- | :------- | :---------- |
| `displayMode`                    | `boolean`                                                                          | Yes      | -           |
| `output`                         | `"html" \| "mathml" \| "htmlAndMathml"`                                            | Yes      | -           |
| `leqno`                          | `boolean`                                                                          | Yes      | -           |
| `fleqn`                          | `boolean`                                                                          | Yes      | -           |
| `throwOnError`                   | `boolean`                                                                          | Yes      | -           |
| `errorColor`                     | `string`                                                                           | Yes      | -           |
| `macros`                         | `Record<string, string \| object \| ((macroExpander:object) => string \| object)>` | Yes      | -           |
| `minRuleThickness`               | `number`                                                                           | Yes      | -           |
| `colorIsTextColor`               | `boolean`                                                                          | Yes      | -           |
| `maxSize`                        | `number`                                                                           | Yes      | -           |
| `maxExpand`                      | `number`                                                                           | Yes      | -           |
| `strict`                         | `\| boolean                                                                        |
| \| "ignore" \| "warn" \| "error" |
| \| StrictFunction`               | Yes                                                                                | -        |
| `trust`                          | `boolean \| ((context: TrustContext) => boolean)`                                  | Yes      | -           |
| `globalGroup`                    | `boolean`                                                                          | Yes      | -           |
