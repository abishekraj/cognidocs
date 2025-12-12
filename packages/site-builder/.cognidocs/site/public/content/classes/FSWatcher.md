# FSWatcher

**Extends:** `EventEmitter`

## Properties

| Name      | Type           | Description |
| :-------- | :------------- | :---------- |
| `options` | `WatchOptions` | -           |

## Methods

### add

Add files, directories, or glob patterns for tracking. Takes an array of strings or just one string.

**Return:** `this`

### unwatch

Stop watching files, directories, or glob patterns. Takes an array of strings or just one string.

**Return:** `this`

### getWatched

Returns an object representing all the paths on the file system being watched by this `FSWatcher` instance. The object's keys are all the directories (using absolute paths unless the `cwd` option was used), and the values are arrays of the names of the items contained in each directory.

**Return:** `{
    [directory: string]: string[];
  }`

### close

Removes all listeners from watched files.

**Return:** `Promise<void>`

### on

**Return:** `this`

### on

**Return:** `this`

### on

Error occurred

**Return:** `this`

### on

Exposes the native Node `fs.FSWatcher events`

**Return:** `this`

### on

Fires when the initial scan is complete

**Return:** `this`

### on

**Return:** `this`

### on

**Return:** `this`

### ref

**Return:** `this`

### unref

**Return:** `this`
