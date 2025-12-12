# DefaultWorkspaceLock

## Properties

| Name                  | Type                              | Description |
| :-------------------- | :-------------------------------- | :---------- |
| `previousTokenSource` | `AbstractCancellationTokenSource` | -           |
| `writeQueue`          | `LockEntry[]`                     | -           |
| `readQueue`           | `LockEntry[]`                     | -           |
| `done`                | `any`                             | -           |

## Methods

### write

**Return:** `Promise<void>`

### read

**Return:** `Promise<T>`

### enqueue

**Return:** `Promise<T>`

### performNextOperation

**Return:** `Promise<void>`

### cancelWrite

**Return:** `void`
