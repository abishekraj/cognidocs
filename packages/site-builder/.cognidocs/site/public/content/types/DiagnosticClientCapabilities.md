# DiagnosticClientCapabilities

Client capabilities specific to diagnostic pull requests.

## Definition

```typescript
{
    /**
     * Whether implementation supports dynamic registration. If this is set to `true`
     * the client supports the new `(TextDocumentRegistrationOptions & StaticRegistrationOptions)`
     * return value for the corresponding server capability as well.
     */
    dynamicRegistration?: boolean;
    /**
     * Whether the clients supports related documents for document diagnostic pulls.
     */
    relatedDocumentSupport?: boolean;
}
```
