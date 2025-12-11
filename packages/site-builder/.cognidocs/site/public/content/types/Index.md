# Index

Move to the sibling at `index` next (after node itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings. Results less than 0 or greater than or equal to `children.length` stop traversing the parent.

## Definition
```typescript
number
```