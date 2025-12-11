# DrawableElem
## Definition
```typescript
{
    groupTexts: string[];
    type: 'rect';
    data: RectElem[];
} | {
    groupTexts: string[];
    type: 'text';
    data: TextElem[];
} | {
    groupTexts: string[];
    type: 'path';
    data: PathElem[];
}
```