# Definition

The definition of a symbol represented as one or many {@link Location locations}. For most programming languages there is only one location at which a symbol is defined. Servers should prefer returning `DefinitionLink` over `Definition` if supported by the client.

## Definition

```typescript
Location | Location[]
```
