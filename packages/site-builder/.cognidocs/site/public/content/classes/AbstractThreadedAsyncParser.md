# AbstractThreadedAsyncParser

## Properties

| Name               | Type                            | Description |
| :----------------- | :------------------------------ | :---------- |
| `threadCount`      | `any`                           | -           |
| `terminationDelay` | `any`                           | -           |
| `workerPool`       | `ParserWorker[]`                | -           |
| `queue`            | `Array<Deferred<ParserWorker>>` | -           |
| `hydrator`         | `Hydrator`                      | -           |

## Methods

### initializeWorkers

**Return:** `void`

### parse

**Return:** `Promise<ParseResult<T>>`

### terminateWorker

**Return:** `void`

### acquireParserWorker

**Return:** `Promise<ParserWorker>`

### createWorker

**Return:** `ParserWorker`
