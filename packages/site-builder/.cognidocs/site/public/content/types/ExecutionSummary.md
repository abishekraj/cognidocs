# ExecutionSummary

## Definition

```typescript
{
    /**
     * A strict monotonically increasing value
     * indicating the execution order of a cell
     * inside a notebook.
     */
    executionOrder: uinteger;
    /**
     * Whether the execution was successful or
     * not if known by the client.
     */
    success?: boolean;
}
```
