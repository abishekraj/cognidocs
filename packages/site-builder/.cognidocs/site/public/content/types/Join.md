# Join

How to join two blocks. “Blocks” are typically joined by one blank line. Sometimes it’s nicer to have them flush next to each other, yet other times they cannot occur together at all. Join functions receive two adjacent siblings and their parent and what they return defines how many blank lines to use between them.

## Definition

```typescript
(
  left: FlowChildren,
  right: FlowChildren,
  parent: FlowParents,
  state: State
) => boolean | number | null | undefined | void
```
