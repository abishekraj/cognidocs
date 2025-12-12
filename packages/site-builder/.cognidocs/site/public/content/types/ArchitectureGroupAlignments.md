# ArchitectureGroupAlignments

Maps the direction that groups connect from. **Outer key**: ID of group A **Inner key**: ID of group B **Value**: 'vertical' or 'horizontal' Note: tmp[groupA][groupB] == tmp[groupB][groupA]

## Definition

```typescript
Record<string, Record<string, Exclude<ArchitectureAlignment, 'bend'>>>;
```
