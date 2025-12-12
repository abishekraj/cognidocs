# DeepPartial

## Definition

```typescript
T[keyof T] extends Function ? T : {
    [P in keyof T]?: DeepPartial<T[P]>;
}
```
