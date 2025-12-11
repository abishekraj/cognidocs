# InclusiveDescendant

Collect all (inclusive) descendants of `Tree`. > 👉 **Note**: for performance reasons, this seems to be the fastest way to > recurse without actually running into an infinite loop, which the > previous version did. > > Practically, a max of `2` is typically enough assuming a `Root` is > passed, but it doesn’t improve performance. > It gets higher with `List > ListItem > Table > TableRow > TableCell`. > Using up to `10` doesn’t hurt or help either.

## Definition
```typescript
(Tree extends UnistParent ? Depth extends Max ? Tree : Tree | InclusiveDescendant<Tree["children"][number], Max, Increment<Depth>> : Tree)
```