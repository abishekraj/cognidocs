# PropertyValue

## Definition

```typescript
TValue extends Array<infer AValue> ? Array<AValue extends infer TUnpacked & {} ? TUnpacked : AValue> : TValue extends infer TUnpacked & {} ? TUnpacked : TValue
```
