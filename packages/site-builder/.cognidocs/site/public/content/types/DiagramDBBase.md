# DiagramDBBase

DiagramDB with fields that is required for all new diagrams.

## Definition

```typescript
{
    getConfig: () => Required<T>;
} & SetRequired<DiagramDB, 'clear' | 'getAccTitle' | 'getDiagramTitle' | 'getAccDescription' | 'setAccDescription' | 'setAccTitle' | 'setDiagramTitle'>
```
