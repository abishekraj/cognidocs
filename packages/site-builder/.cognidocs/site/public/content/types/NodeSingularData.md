# NodeSingularData

## Definition

```typescript
{
    type: 'service';
    id: string;
    icon?: string;
    label?: string;
    parent?: string;
    width: number;
    height: number;
    [key: string]: any;
} | {
    type: 'junction';
    id: string;
    parent?: string;
    width: number;
    height: number;
    [key: string]: any;
} | {
    type: 'group';
    id: string;
    icon?: string;
    label?: string;
    parent?: string;
    [key: string]: any;
}
```
