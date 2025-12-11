# TrustContext

For the `trust` option in `KatexOptions`, a custom function `handler(context)` can be provided to customize behavior depending on the context (command, arguments e.g. a URL, etc.)

## Definition
```typescript
| { command: "\\url", url: string, protocol?: string }
    | { command: "\\href", url: string, protocol?: string }
    | { command: "\\includegraphics", url: string, protocol?: string }
    | { command: "\\htmlClass", class: string }
    | { command: "\\htmlId", id: string }
    | { command: "\\htmlStyle", style: string }
    | { command: "\\htmlData", attributes: Record<string, string> }
```