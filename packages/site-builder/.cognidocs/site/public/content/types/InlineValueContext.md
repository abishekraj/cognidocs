# InlineValueContext

## Definition

```typescript
{
  /**
   * The stack frame (as a DAP Id) where the execution has stopped.
   */
  frameId: integer;
  /**
   * The document range where execution has stopped.
   * Typically the end position of the range denotes the line where the inline values are shown.
   */
  stoppedLocation: Range;
}
```
