# Cloneable

Deep clone. See: <https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1237#issuecomment-1345515448>

## Definition
```typescript
T extends Record<any, any> ? { -readonly [k in keyof T]: Cloneable<T[k]>; } : T
```