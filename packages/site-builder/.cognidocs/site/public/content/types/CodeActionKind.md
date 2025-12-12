# CodeActionKind

The kind of a code action. Kinds are a hierarchical list of identifiers separated by `.`, e.g. `"refactor.extract.function"`. The set of kinds is open and client needs to announce the kinds it supports to the server during initialization.

## Definition

```typescript
string;
```
