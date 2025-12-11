# DiagnosticOptions

Diagnostic options.

## Definition
```typescript
WorkDoneProgressOptions & {
    /**
     * An optional identifier under which the diagnostics are
     * managed by the client.
     */
    identifier?: string;
    /**
     * Whether the language has inter file dependencies meaning that
     * editing code in one file can result in a different diagnostic
     * set in another file. Inter file dependencies are common for
     * most programming languages and typically uncommon for linters.
     */
    interFileDependencies: boolean;
    /**
     * The server provides support for workspace diagnostics as well.
     */
    workspaceDiagnostics: boolean;
}
```