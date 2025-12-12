# WorkspaceUnchangedDocumentDiagnosticReport

An unchanged document diagnostic report for a workspace diagnostic result.

## Definition

```typescript
UnchangedDocumentDiagnosticReport & {
    /**
     * The URI for which diagnostic information is reported.
     */
    uri: DocumentUri;
    /**
     * The version number for which the diagnostics are reported.
     * If the document is not marked as open `null` can be provided.
     */
    version: integer | null;
}
```
