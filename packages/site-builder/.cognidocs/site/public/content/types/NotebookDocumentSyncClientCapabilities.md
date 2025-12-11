# NotebookDocumentSyncClientCapabilities

Notebook specific client capabilities.

## Definition
```typescript
{
    /**
     * Whether implementation supports dynamic registration. If this is
     * set to `true` the client supports the new
     * `(TextDocumentRegistrationOptions & StaticRegistrationOptions)`
     * return value for the corresponding server capability as well.
     */
    dynamicRegistration?: boolean;
    /**
     * The client supports sending execution summary data per cell.
     */
    executionSummarySupport?: boolean;
}
```