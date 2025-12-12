# Stitch

Custom comment-like value we pass through parse5, which contains a replacement node that we’ll swap back in afterwards.

## Definition

```typescript
{
  /**
   *   Node type.
   */
  type: 'comment';
  /**
   *   Replacement value.
   */
  value: {
    stitch: Nodes;
  }
}
```
