# DeclarationLink

Information about where a symbol is declared. Provides additional metadata over normal {@link Location location} declarations, including the range of the declaring symbol. Servers should prefer returning `DeclarationLink` over `Declaration` if supported by the client.

## Definition

```typescript
LocationLink;
```
