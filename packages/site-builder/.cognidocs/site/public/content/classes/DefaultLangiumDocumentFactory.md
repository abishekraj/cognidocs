# DefaultLangiumDocumentFactory

## Properties

| Name                 | Type                   | Description |
| :------------------- | :--------------------- | :---------- |
| `serviceRegistry`    | `ServiceRegistry`      | -           |
| `textDocuments`      | `TextDocumentProvider` | -           |
| `fileSystemProvider` | `FileSystemProvider`   | -           |

## Methods

### fromUri

**Return:** `Promise<LangiumDocument<T>>`

### fromTextDocument

**Return:** `LangiumDocument<T>`

### fromTextDocument

**Return:** `Promise<LangiumDocument<T>>`

### fromTextDocument

**Return:** `LangiumDocument<T> | Promise<LangiumDocument<T>>`

### fromString

**Return:** `LangiumDocument<T>`

### fromString

**Return:** `Promise<LangiumDocument<T>>`

### fromString

**Return:** `LangiumDocument<T> | Promise<LangiumDocument<T>>`

### fromModel

**Return:** `LangiumDocument<T>`

### create

**Return:** `LangiumDocument<T>`

### createAsync

**Return:** `Promise<LangiumDocument<T>>`

### createLangiumDocument

**Return:** `LangiumDocument<T>`

### update

**Return:** `Promise<LangiumDocument<T>>`

### parse

**Return:** `ParseResult<T>`

### parseAsync

**Return:** `Promise<ParseResult<T>>`

### createTextDocumentGetter

**Return:** `() => TextDocument`
