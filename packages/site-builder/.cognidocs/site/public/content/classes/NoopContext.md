# NoopContext

Fast implementation of IContext used for first-pass validation. If that fails, we can validate using DetailContext to collect error messages. That's faster for the common case when messages normally pass validation.

## Methods

### fail

**Return:** `false`

### unionResolver

**Return:** `IUnionResolver`

### createContext

**Return:** `IContext`

### resolveUnion

**Return:** `void`
