# InlayHintClientCapabilities

Inlay hint client capabilities.

## Definition
```typescript
{
    /**
     * Whether inlay hints support dynamic registration.
     */
    dynamicRegistration?: boolean;
    /**
     * Indicates which properties a client can resolve lazily on an inlay
     * hint.
     */
    resolveSupport?: {
        /**
         * The properties that a client can resolve lazily.
         */
        properties: string[];
    };
}
```