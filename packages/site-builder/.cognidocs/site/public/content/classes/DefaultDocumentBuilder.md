# DefaultDocumentBuilder

## Properties

| Name                     | Type                                | Description |
| :----------------------- | :---------------------------------- | :---------- |
| `updateBuildOptions`     | `BuildOptions`                      | -           |
| `langiumDocuments`       | `LangiumDocuments`                  | -           |
| `langiumDocumentFactory` | `LangiumDocumentFactory`            | -           |
| `textDocuments`          | `TextDocumentProvider \| undefined` | -           |
| `indexManager`           | `IndexManager`                      | -           |
| `serviceRegistry`        | `ServiceRegistry`                   | -           |
| `updateListeners`        | `DocumentUpdateListener[]`          | -           |
| `buildPhaseListeners`    | `any`                               | -           |
| `documentPhaseListeners` | `any`                               | -           |
| `buildState`             | `any`                               | -           |
| `documentBuildWaiters`   | `any`                               | -           |
| `currentState`           | `any`                               | -           |

## Methods

### build

**Return:** `Promise<void>`

### update

**Return:** `Promise<void>`

### emitUpdate

**Return:** `Promise<void>`

### sortDocuments

**Return:** `LangiumDocument[]`

### hasTextDocument

**Return:** `boolean`

### shouldRelink

**Return:** `boolean`

### onUpdate

**Return:** `Disposable`

### buildDocuments

**Return:** `Promise<void>`

### prepareBuild

**Return:** `void`

### runCancelable

**Return:** `Promise<void>`

### onBuildPhase

**Return:** `Disposable`

### onDocumentPhase

**Return:** `Disposable`

### waitUntil

**Return:** `Promise<void>`

### waitUntil

**Return:** `Promise<URI | undefined>`

### waitUntil

**Return:** `Promise<URI | undefined | void>`

### notifyDocumentPhase

**Return:** `Promise<void>`

### notifyBuildPhase

**Return:** `Promise<void>`

### shouldValidate

**Return:** `boolean`

### validate

**Return:** `Promise<void>`

### getBuildOptions

**Return:** `BuildOptions`
