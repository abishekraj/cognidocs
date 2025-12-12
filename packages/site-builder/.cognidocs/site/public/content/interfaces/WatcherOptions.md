# WatcherOptions

## Properties

| Name                         | Type                                                    | Optional | Description |
| :--------------------------- | :------------------------------------------------------ | :------- | :---------- |
| `allowInputInsideOutputPath` | `boolean \| undefined`                                  | Yes      | -           |
| `buildDelay`                 | `number \| undefined`                                   | Yes      | -           |
| `chokidar`                   | `ChokidarOptions \| undefined`                          | Yes      | -           |
| `clearScreen`                | `boolean \| undefined`                                  | Yes      | -           |
| `exclude`                    | `string \| RegExp \| (string \| RegExp)[] \| undefined` | Yes      | -           |
| `include`                    | `string \| RegExp \| (string \| RegExp)[] \| undefined` | Yes      | -           |
| `skipWrite`                  | `boolean \| undefined`                                  | Yes      | -           |
| `onInvalidate`               | `((id: string) => void) \| undefined`                   | Yes      | -           |
